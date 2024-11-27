import postmodel from "../models/post.model.js";

export const createpost = async (req,res) => {
    try {
        const {title, desc, cover} = req.body;
        
        if(!title || !desc || !cover){
            return res.status(400).json({message: 'Please provide all fields', success: false});
        }
        else{
            const newPost = await postmodel.create({
                title,
                desc,
                cover
            })

            res.status(200).send({
                success: true,
                message: 'post created successfully',
                post: newPost
            })
        }
    } catch (error) {
        console.log(error)
    }
}


export const deletepost = async (req,res) => {
    try {
        const {postid} = req.body;
        
        const dpost = await postmodel.findOneAndDelete({_id: postid})

        res.send({
            success: true,
            message: 'post deleted successfully',
            dpost: dpost
        })
    } catch (error) {
        console.log(error)
    }
}

export const allposts = async (req,res) => {
    try { 
        const dpost = await postmodel.find().sort({createdAt: -1})

        res.send({
            success: true,
            message: 'post deleted successfully',
            allposts: dpost
        })
    } catch (error) {
        console.log(error)
    }
}

export const view = async (req,res) => {
    try { 
        const {id} = req.body;

        const fPost = await postmodel.findById(id);


        res.send({
            success: true,
            message: 'post deleted successfully',
            viewpost: fPost
        })

    } catch (error) {
        console.log(error)
    }
}