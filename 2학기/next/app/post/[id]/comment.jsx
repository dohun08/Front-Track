/* app/post/[id]/comment.jsx */
'use client'
import { useState } from 'react'
import styles from './comment.module.css'

export default function Comment({ _id, onCommentSubmit }) {
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {
    if (!comment.trim()) return
    
    setIsSubmitting(true)
    
    fetch('/api/comment/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        comment: comment.trim(), 
        _id: _id 
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then(data => {
      setComment('')
      if (onCommentSubmit) {
        onCommentSubmit()
      }
    })
    .catch(error => {
      console.error('Error submitting comment:', error)
      alert('댓글 작성 중 오류가 발생했습니다.')
    })
    .finally(() => {
      setIsSubmitting(false)
    })
  }

  return (
    <div className={styles.commentForm}>
      <input 
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
        placeholder="댓글을 입력하세요..."
        className={styles.commentInput}
      />
      <button 
        onClick={handleSubmit}
        disabled={isSubmitting || !comment.trim()}
        className={isSubmitting || !comment.trim() 
          ? `${styles.submitButton} ${styles.disabled}` 
          : `${styles.submitButton} ${styles.active}`}
      >
        {isSubmitting ? '전송 중...' : '댓글 작성'}
      </button>
    </div>
  )
}