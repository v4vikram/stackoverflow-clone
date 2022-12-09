import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { updateProfile } from '../../actions/users'

const EditProfileForm = ({ currentUser, handleSetSwitch }) => {
    // console.log(currentUser.data[0].name)
    console.log('currentUser currentUser', currentUser.data[0]._id)
    console.log(currentUser?.data[0]?.name)

    const [name, setName] = useState(currentUser?.data[0]?.name)
    const [about, setAbout] = useState("") //currentUser?.result?.about
    const [tags, setTags] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(tags.length === 0){
            dispatch(updateProfile( currentUser?.data[0]?._id, { name, about, tags: currentUser?.data?.tags }))
        } else{
            dispatch(updateProfile( currentUser?.data[0]?._id, { name, about, tags }))
        }
        handleSetSwitch(false)
    }
    console.log('name', name)
    return (
        <div>
            <h1 className='edit-profile-title'>
                Edit Your Profile
            </h1>
            <h2 className="edit-profile-title-2">
                Public information
            </h2>
            <form className="edit-profile-form" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <h3>Display name</h3>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </label>
                <label htmlFor="about">
                    <h3>About me</h3>
                    <textarea id="about" cols="30" rows="10" value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
                </label>
                <label htmlFor="tags">
                    <h3>Watched tags</h3>
                    <p>Add tags separated by 1 space</p>
                    <input type="text" id='tags' onChange={(e) => setTags(e.target.value.split(' '))}/>
                </label><br />
                <input type="submit" value='Save profile' className='user-submit-btn'/>
                <button type='button' className='user-cancel-btn' onClick={() => handleSetSwitch(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default EditProfileForm