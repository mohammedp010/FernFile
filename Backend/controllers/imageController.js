export const uploadImage = (req, res) => {
    try {
        return res.status(200).json({ msg: 'Hello'})
    } catch (error) {
        console.error(error.message);
    }
}