import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react';
import { Avatar } from '../Avatar/Avatar'
import styles from './Comment.module.css'

interface  CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}:CommentProps) {

    const [likeCount, setLikeCount] = useState(0)
    function handleDeletecomment(){
        onDeleteComment(content);
    }
    function handleLikeComment(){
        setLikeCount((prevLikeCount) => prevLikeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/GilCar21.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gilber Jorge</strong>
                            <time title='04 de agost de 2022' dateTime='2022-08-04 12:34:58'>Publicado há 1h</time>
                        </div>
                        <button onClick={handleDeletecomment} title='Deletar comentario'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}