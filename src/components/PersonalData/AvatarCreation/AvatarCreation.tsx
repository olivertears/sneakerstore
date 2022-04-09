import React, {Dispatch, FC, SetStateAction, useEffect, useRef, useState} from 'react';
//@ts-ignore
import cl from './AvatarCreation.module.css'
import {finished} from "stream";
import {useActions} from "../../../hooks/useActions";
import {ICustomer} from "../../../models/ICustomer";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

interface IAvatarCreationProps {
    avatarUrl: string
    setAvatarUrl: Dispatch<SetStateAction<string>>
}

const AvatarCreation: FC<IAvatarCreationProps> = ({avatarUrl, setAvatarUrl}) => {
    const {customer, authorization} = useTypedSelector(state => state.customer)
    const {putCustomer} = useActions.useCustomerActions()
    const {setError} = useActions.useAppActions()

    const canvasWidth = useRef<number>(0)
    const canvasHeight = useRef<number>(0)

    useEffect(() => {
        const avatar = new Image()
        avatar.src = avatarUrl
        // @ts-ignore
        const canvas: HTMLCanvasElement = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')
        // @ts-ignore
        const previewCanvas: HTMLCanvasElement = document.getElementById('previewCanvas')
        const previewCtx = previewCanvas.getContext('2d')
        previewCanvas.setAttribute('width', `180px`)
        previewCanvas.setAttribute('height', `180px`)
        // @ts-ignore
        const workspace: HTMLDivElement = document.getElementById('workspace')
        // @ts-ignore
        const resizer: HTMLDivElement = document.getElementById('resizer')
        // @ts-ignore
        const saveBtn: HTMLButtonElement = document.getElementById('saveBtn')

        avatar.onload = () => {
            if (avatar.width / avatar.height > 12 || avatar.width / avatar.height < 1 / 12) {
                setError('Incorrect aspect ratio: one side of the image is much longer than another one!')
                setAvatarUrl('')
            }

            const RATIO: number = avatar.width > avatar.height ? 300 / avatar.width : 300 / avatar.height
            const WIDTH: number = canvasWidth.current = Math.floor(avatar.width * RATIO)
            const HEIGHT: number = canvasHeight.current = Math.floor(avatar.height * RATIO)

            workspace.style.maxWidth = `${WIDTH > HEIGHT ? HEIGHT : WIDTH}px`
            workspace.style.maxHeight = `${WIDTH > HEIGHT ? HEIGHT : WIDTH}px`
            workspace.style.width = `${WIDTH > HEIGHT ? HEIGHT : WIDTH}px`
            workspace.style.height = `${WIDTH > HEIGHT ? HEIGHT : WIDTH}px`
            workspace.style.top = `${WIDTH > HEIGHT ? (300 - HEIGHT) / 2 : (300 - WIDTH) / 2}px`
            workspace.style.left = `${WIDTH > HEIGHT ? (300 - HEIGHT) / 2 : (300 - WIDTH) / 2}px`

            canvas.setAttribute('width', `${WIDTH}px`)
            canvas.setAttribute('height', `${HEIGHT}px`)
            // @ts-ignore
            ctx.drawImage(avatar, 0, 0, WIDTH, HEIGHT)

            const minOffsetTop: number =  Math.floor((300 - canvasHeight.current) / 2)
            const minOffsetLeft: number = Math.floor((300 - canvasWidth.current) / 2)
            // @ts-ignore
            previewCtx.drawImage(canvas, workspace.offsetLeft - minOffsetLeft, workspace.offsetTop - minOffsetTop, workspace.clientWidth, workspace.clientHeight, 0, 0, 180, 180)
        }

        workspace.addEventListener('transitionend', () => {
            const minOffsetTop: number =  Math.floor((300 - canvasHeight.current) / 2)
            const minOffsetLeft: number = Math.floor((300 - canvasWidth.current) / 2)
            // @ts-ignore
            previewCtx.clearRect(0, 0, previewCanvas.width, previewCanvas.height)
            // @ts-ignore
            previewCtx.drawImage(canvas, workspace.offsetLeft - minOffsetLeft, workspace.offsetTop - minOffsetTop, workspace.clientWidth, workspace.clientHeight, 0, 0, 180, 180)
        })

        resizer.addEventListener('mousedown', (e: MouseEvent) => {
            e.preventDefault()
            e.stopPropagation()
            e.stopImmediatePropagation()

            let startX = e.clientX

            const resize = (e: MouseEvent) => {
                e.preventDefault()

                let offsetX = startX - e.clientX

                startX = e.clientX

                const maxOffsetTop: number = Math.floor((300 - canvasHeight.current) / 2 + canvasHeight.current)
                const maxOffsetLeft: number = Math.floor((300 - canvasWidth.current) / 2 + canvasWidth.current)

                workspace.offsetTop > maxOffsetTop - workspace.clientHeight || workspace.offsetLeft > maxOffsetLeft - workspace.clientWidth
                    ? e.stopImmediatePropagation()
                    : workspace.style.width = workspace.style.height = workspace.clientWidth - offsetX + 'px'
            }

            function stopResize() {
                window.removeEventListener('mousemove', resize, false);
                window.removeEventListener('mouseup', stopResize, false);
            }

            window.addEventListener('mousemove', resize, false)
            window.addEventListener('mouseup', stopResize, false)
        }, false);


        workspace.addEventListener('mousedown', (e) => {
            e.preventDefault()
            let startCoordinates = {
                x: e.clientX,
                y: e.clientY
            }

            const onMouseMove = (e: MouseEvent) => {
                e.preventDefault();
                let offset = {
                    x: startCoordinates.x - e.clientX,
                    y: startCoordinates.y - e.clientY
                }
                startCoordinates = {
                    x: e.clientX,
                    y: e.clientY
                }

                const minOffsetTop: number =  Math.floor((300 - canvasHeight.current) / 2)
                const maxOffsetTop: number = minOffsetTop + canvasHeight.current
                const minOffsetLeft: number = Math.floor((300 - canvasWidth.current) / 2)
                const maxOffsetLeft: number = minOffsetLeft + canvasWidth.current

                if(workspace.offsetTop < minOffsetTop) {
                    workspace.style.top = minOffsetTop + 'px'
                } else if (workspace.offsetTop > maxOffsetTop - workspace.clientHeight){
                    workspace.style.top = maxOffsetTop - workspace.clientHeight + 'px'
                } else workspace.style.top = workspace.offsetTop - offset.y + 'px';

                if(workspace.offsetLeft < minOffsetLeft) {
                    workspace.style.left = minOffsetLeft + 'px'
                } else if (workspace.offsetLeft > maxOffsetLeft - workspace.clientWidth) {
                    workspace.style.left = maxOffsetLeft - workspace.clientWidth + 'px'
                } else workspace.style.left = workspace.offsetLeft - offset.x + 'px';
            }

            const onMouseUp = (e: MouseEvent) => {
                e.preventDefault();

                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            };

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        })

        saveBtn.onclick = () => {
            const changedCustomer: ICustomer = {
                ...customer,
                avatar: previewCanvas.toDataURL("image/webp")
            }
            putCustomer(changedCustomer, authorization)
        }
    }, [])


    return (
        <div className={cl.wrap}>
            <div className={cl.content}>
                <h1>Avatar Creation</h1>
                <div className={cl.imageSpace}>
                    <div className={cl.canvasBackground}>
                        <canvas id='canvas' className={cl.canvas}>
                        </canvas>
                        <div id="workspace" className={cl.workspace} draggable={true}>
                            <div id="resizer" className={cl.resizer}></div>
                        </div>
                    </div>

                    <div className={cl.wrapPreview}>
                        <h1>PREVIEW</h1>
                        <canvas id='previewCanvas' className={cl.square}/>
                        <button id='saveBtn' onClick={() => setAvatarUrl('')}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvatarCreation