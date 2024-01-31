// Write your code here.
import './index.css'
const ThumbnailItem = props => {
  const {imageList, onChangeImage, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageList
  const styleImage = !isActive ? 'opacit' : ''
  const changeImage = () => {
    onChangeImage(id)
  }
  return (
    <li className="list-item-style">
      <button type="button" className={`buttn ${styleImage}`} onClick={changeImage}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}
export default ThumbnailItem
