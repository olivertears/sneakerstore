import React, {Dispatch, FC, SetStateAction, useEffect, useRef, useState} from 'react';
//@ts-ignore
import cl from './AvatarCreation.module.css'
import {finished} from "stream";

interface IAvatarCreationProps {
    avatarUrl: string
    setAvatarUrl: Dispatch<SetStateAction<string>>
}

const AvatarCreation: FC<IAvatarCreationProps> = ({avatarUrl, setAvatarUrl}) => {
    const canvasWidth = useRef<number>(0)
    const canvasHeight = useRef<number>(0)

    useEffect(() => {
        const avatar = new Image()
        avatar.src = avatarUrl
        // @ts-ignore
        const canvas: HTMLCanvasElement = document.getElementById('canvas')
        const ctx = canvas.getContext('2d')
        // @ts-ignore
        const workspace: HTMLDivElement = document.getElementById('workspace')
        // @ts-ignore
        const resizer: HTMLDivElement = document.getElementById('resizer')

        avatar.onload = () => {
            const RATIO: number = avatar.width > avatar.height ? 300 / avatar.width : 300 / avatar.height
            const WIDTH: number = canvasWidth.current = Math.floor(avatar.width * RATIO)
            const HEIGHT: number = canvasHeight.current = Math.floor(avatar.height * RATIO)

            workspace.style.maxWidth = `${WIDTH > HEIGHT ? HEIGHT : WIDTH}px`
            workspace.style.maxHeight = `${WIDTH > HEIGHT ? HEIGHT : WIDTH}px`
            workspace.style.width = `${WIDTH > HEIGHT ? HEIGHT : WIDTH}px`
            workspace.style.height = `${WIDTH > HEIGHT ? HEIGHT : WIDTH}px`
            workspace.style.top = `${WIDTH > HEIGHT ? 80 + (300 - HEIGHT) / 2 : 80 + (300 - WIDTH) / 2}px`
            workspace.style.left = `${WIDTH > HEIGHT ? 50 + (300 - HEIGHT) / 2 : 50 + (300 - WIDTH) / 2}px`

            canvas.setAttribute('width', `${WIDTH}px`)
            canvas.setAttribute('height', `${HEIGHT}px`)
            // @ts-ignore
            ctx.drawImage(avatar, 0, 0, WIDTH, HEIGHT)
        }

        resizer.addEventListener('mousedown', (e: MouseEvent) => {
            e.preventDefault()
            e.stopPropagation()
            e.stopImmediatePropagation()

            window.addEventListener('mousemove', resize, false)
            window.addEventListener('mouseup', stopResize, false)
        }, false);

        const resize = (e: MouseEvent) => {
            workspace.style.width = (e.clientX - 210 - workspace.offsetLeft) + 'px';
            workspace.style.height = (e.clientX - 210 - workspace.offsetLeft) + 'px';
        }
        function stopResize() {
            window.removeEventListener('mousemove', resize, false);
            window.removeEventListener('mouseup', stopResize, false);
        }


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

                const minOffsetTop: number = 80 + (300 - canvasHeight.current) / 2
                const maxOffsetTop: number = minOffsetTop + canvasHeight.current
                const minOffsetLeft: number = 50 + (300 - canvasWidth.current) / 2
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
                        <div className={cl.previewIcons}>
                            <img src={avatarUrl} className={cl.square}/>
                            <img src={avatarUrl} className={cl.circle}/>
                        </div>
                        <button onClick={() => setAvatarUrl('')}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvatarCreation