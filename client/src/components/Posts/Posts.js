import React from 'react'
import Post from './Post/Post'
import {useSelector} from 'react-redux'
import useStyles from './styles'
import {Grid,CircularProgress}from '@material-ui/core'


function Posts({setCurrentId,currentId}) {
    const posts=useSelector((state)=>state.posts)
    const classes=useStyles()
    return (
        !posts.length ? <CircularProgress/>:(
            <Grid className={classes.container} container alignItems='stretch' spacing={2}>
                {posts.map((post)=>(
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} currentId={currentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts
