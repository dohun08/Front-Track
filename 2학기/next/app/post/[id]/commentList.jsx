// app/post/[id]/commentList.jsx
'use client'
import { useState, useEffect } from 'react'
import styles from './commentList.module.css'

export default function CommentList({ _id }) {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`/api/comment/list?id=${_id}`)
        const data = await response.json()
        setComments(data)
      } catch (error) {
        console.error('Error fetching comments:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchComments()
  }, [_id])

  if (loading) {
    return <div className={styles.commentList}>로딩 중...</div>
  }

  return (
    <div className={styles.commentList}>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment._id} className={styles.commentItem}>
            <div className={styles.commentHeader}>
              <span className={styles.commentAuthor}>
                {comment.author || '익명'}
              </span>
              <span className={styles.commentDate}>
                {new Date(comment.createdAt).toLocaleString()}
              </span>
            </div>
            <div className={styles.commentContent}>
              {comment.content}
            </div>
          </div>
        ))
      ) : (
        <div className={styles.noComments}>아직 댓글이 없습니다.</div>
      )}
    </div>
  )
}
