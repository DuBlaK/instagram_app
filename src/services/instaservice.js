export default class InstaService {
    constructor() {
        this._apiBase = 'http://localhost:3000/';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${this._apiBase}, received ${res.status}`)
        }

        return res.json()
    }

    getAllPosts = async () => {
        const res = await this.getResource('posts');
        return res;
    }

    getAllUsers = async () => {
        const res = await this.getResource('posts');
        return res.map(this._transformPostsForUsers)
    }

    getAllPhotos = async () => {
        const res = await this.getResource('posts');
        return res.map(this._transformPostsForPhotos);
    }

    _transformPostsForUsers = (post) => {
        return {
            photo: post.photo,
            altname: post.altname,
            name: post.name,
            id: post.id,
        }
    }
    
    _transformPostsForPhotos = (post) => {
        return {
            src: post.src,
            alt: post.alt,
            id: post.id,
        }
    }
}