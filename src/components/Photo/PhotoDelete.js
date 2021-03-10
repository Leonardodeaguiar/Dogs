import React from "react";
import styles from "./PhotoDelete.module.css";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_DELETE } from "../../api";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  const handleClick = async () => {
    const confirm = window.confirm("Tem Certeza que deseja deletar esta foto?");
    const token = window.localStorage.getItem("token");
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id, token);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  };
  return (
    <>
      {loading ? (
        <button className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      ) : (
        <button disabled className={styles.delete}>
          Deletando...
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
