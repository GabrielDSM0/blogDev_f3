import styles from './CreatePost.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const handlerSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div>
        <h2>Nova Postagem</h2>
        <p>Compartilhe sua experiência no mundo desenvolvedor</p>
        <form onSubmit={handlerSubmit}>
          <label>
            <span>Título:</span>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Título da postagem"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required />
          </label>
          <label>
            <span>URL da imagem:</span>
            <input
              type="text"
              name="image"
              id="image"
              placeholder="Endereço da imagem da postagem"
              onChange={(e) => setImage(e.target.value)}
              value={image}
              required />
          </label>
          <label>
            <span>Conteúdo da Postagem:</span>
            <textarea
              name="body"
              id="body"
              placeholder="Insira o conteúdo de sua postagem aqui"
              onChange={(e) => setBody(e.target.value)}
              value={body}
              required>
            </textarea>
          </label>
          <label>
            <span>Tags:</span>
            <input
              type="text"
              name="tags"
              id="tags"
              placeholder="Insira suas tags separadas por virgulas"
              onChange={(e) => setTags(e.target.value)}
              value={tags}
              required />
          </label>
          <button className="btn">Postar</button>
            {/*!loading && <button className="btn">Cadastrar</button>}
            {loading && <button className="btn" disabled>Aguarde...</button>}
            {error && <p className='error'>{error}</p>*/}
        </form>
      </div>
    </>
  )
}

export default CreatePost