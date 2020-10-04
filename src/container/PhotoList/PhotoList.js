import React, {Component} from 'react'
import classes from './PhotoList.module.css'
import PhotoInfo from '../../components/PhotoInfo/PhotoInfo'


export default class PhotoList extends Component {
    state={
        photos:[],
        photo:null,
        isOpen:false
    }
    async componentDidMount() {
        const response= await fetch('https://boiling-refuge-66454.herokuapp.com/images')
        const data = await response.json()
        this.setState({
            photos:data
        })
    }

    async postComment(data) {
        console.log(this.state.photo.comments);
        try {
         await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${this.state.photo.id}/comments`, {
            method: 'POST', // или 'PUT'
            body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
            headers: {
              'Content-Type': 'application/json'
            }
          })
          
        }
        catch(error) {console.error('Ошибка:', error);}
    }

    async fetchPhoto(id) {
        const response = await fetch('https://boiling-refuge-66454.herokuapp.com/images/'+id)
        const photo = await  response.json()
        console.log(photo);
        
        this.setState({
            photo
        })
    }

    getDate = () => {
        const date = new Date().toLocaleString()
        return date.split(',')[0]
    }

    openModal = (e) => {
        
        const id=+e.target.id
        console.log(e.target.id)
        if (id!==undefined)
        {
            this.fetchPhoto(id)
           
            this.setState({
                isOpen:true
            })
        }
        

     
       
       
       
        
    }
    
      handleSubmit = (name,comment) => {
          const photo=this.state.photo
          photo.comments.push({
              'id':new Date().toLocaleString(),
              'text':comment,
              'date':Date.parse(new Date())
          })
         
          this.postComment({'name':name,'comment':comment})
          this.setState({
            photo
        })
          
          
        console.log('Submit function!');
        
      }
    
      handleCancel = () => {
        console.log('Cancel function!');
        this.setState({ 
            isOpen: false,
            photo:null
        });
      }
    render() {
       
        return(
            <>
            <section className={classes.photolist}>
                <div className={classes.photolist__inner}>
                    {this.state.photos.map(photo => {
                        return (<img id={photo.id} onClick={e=>this.openModal(e)} className={classes.photo} alt="photo1" src={photo.url}/>)
                    })}
                </div>
            </section>
            {this.state.photo?<PhotoInfo isOpen={this.state.isOpen}
                        photo={this.state.photo}
                        onClose={this.handleCancel}
                        addComment={this.handleSubmit}
            />:null}
            </>
        )
    }
}