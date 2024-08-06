import React from 'react'
import styles from "../hoja-de-estilos/FormRegister.module.css";

function FormRegister() {
    return (
        <div className={styles.container}>
         <div className={styles.instagram_img}>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwcalW3PfsuuCEYu4UAuB919UpqzZym29P8Q&s" alt="" />
         </div>

         <div className={styles.form_container}>
            <form>

               <div className={styles.user_form}>
                  <input type="text"/>
               </div>

               <div className={styles.password_form}>
                  <input type="password"/>
               </div>

               <div className={styles.form_button}>
                  <button className="rounded-4" type="submit">Registrarse</button>
               </div>

               <p className={styles.p_form}>O</p>

               <p className={styles.p_form}>¿Ya tienes una cuenta? <a href="#">Entrar</a></p>

            </form>
         </div>
      </div>
    )
}

export default FormRegister