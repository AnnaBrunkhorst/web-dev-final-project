import podcastsModel from '../models/podcast.model.js'

const findAllPodcasts = () => {
    return podcastsModel.find()
}
const findPodcastById = (id) => {
    return podcastsModel.findById(id)
}
const findPodcastByPodchaserId = (podcastId) => {
    return podcastsModel.find({"podcastId": { $eq: podcastId } } )
}
const createPodcast = (podcast) => {
    return podcastsModel.create(podcast)
}
const deletePodcast = (id) => {
    return podcastsModel.deleteOne({_id: id})
}
const updatePodcast = (id, updatedPodcast) => {
    return podcastsModel.updateOne(
        {_id: id},
        {$set: updatedPodcast}
    )
}

export default {
    findAllPodcasts, findPodcastById, findPodcastByPodchaserId, createPodcast, deletePodcast,
    updatePodcast
}