import React, { useState } from 'react'
import Modal from '../../container/Modal/Modal'
import classes from'./PhotoInfo.module.css'


const PhotoInfo =(props) => {
    const [name,setName]=useState('')
    const [comment,setComment]=useState('')
  
    function getComments() {
        return props.photo.comments.map(comment => {
            return (
                <div className={classes.comment}>
                    <p className={classes.comment__date}>{getTime(comment.date)}</p>
                    <p className={classes.comment__text}>{comment.text}</p>
                </div>
            )
        })
    }
 
    function getTime(date) {
         const getDate = new Date(date).toLocaleString()
         return getDate.split(',')[0]
     }


     function addComment(e) {
         console.log(e.target);
         
         e.preventDefault();
         props.addComment(name,comment)
         setName('')
         setComment('')
         
     }

     function isValid() {
         console.log(name);
         console.log(comment);
         
         console.log(name.length!==0 && comment.length!==0);
         
         return name.length!==0 && comment.length!==0
     }

    return (
        <>{props.isOpen && 

            <Modal>
                
                    <div className={classes.modal__overlay}>
                        <div className={classes.modal__window}>
                            <div className={classes.modal__inner}>
                                <div className={classes.modal__photoinfo}>                               
                                    <img className={classes.modal__photo} alt="1" src={props.photo.url}/>  
                                    <div className={classes.modal__comments}>
                                    {(props.photo.comments.length!==0)
                                    ?
                                    getComments()
                                    :
                                    <div className={classes.comment}>
                                    <p className={classes.comment__text}>Комментариев пока нет</p>
                                    </div>}
                                </div>
                                </div>
                                <form onSubmit={addComment} className={classes.modal__form}>
                                    <input
                                        className={classes.modal__input} 
                                        type="text"  
                                        placeholder="Ваше имя"
                                        value={name}
                                        onChange={(e)=>setName(e.target.value)}
                                    />
                                    <input 
                                        className={classes.modal__input} 
                                        type="text"
                                        placeholder="Ваш комментарий"
                                        value={comment}
                                        onChange={(e)=>setComment(e.target.value)}
                                    />
                                    <input  disabled={!isValid()} className={classes.modal__btn} type="submit" value='Оставить комментарий'/>
                                </form>       
                          
                                
                                
                                
                               
                            </div>
                            <button  onClick={props.onClose} className={classes.close}>
                            </button>
                         
                           
                                
                           </div>

                            
                    </div>
                    
                
            </Modal>
        }
       
        </>
    )
}

export default PhotoInfo