"use client" 
import styles from "./list.module.css";
import Link from "next/link";

export default function ListItem2({result}) {
    console.log(result)
  return (
    <div className={styles.listBtnArea}>
            <Link href={`/edit/${result._id}`}>
              <button className={styles.editBtn}>수정</button>
            </Link>
            <button
                onClick={async () => {
                    if (confirm("정말 삭제하시겠습니까?")) {
                    const res = await fetch("/api/post/delete", {
                        method: "DELETE",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ _id: result._id }),
                    });
                    if (res.ok) {
                        alert("삭제 완료");
                        location.reload(); // 삭제 후 페이지 새로고침
                    } else {
                        alert("삭제 실패");
                    }
                    }
                }}
              className={styles.deleteBtn}
            >
              삭제
            </button>
          </div>
  );
}
