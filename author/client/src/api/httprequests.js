import axios from 'axios'
//get al data
export const getallauthors = async () => {
    let globalData;
    await axios.get("http://localhost:3000/authors").then((res) => {
        globalData = res.data.data;


    });

    return globalData
};
//GET DATA BY ID
export const getdatabyid = async (id) => {
    let data;
    await axios.get(`http://localhost:3000/authors/${id}`).then((res) => {
        data = res.data.data

    })

    return data
}
//deletebyid
export const deletebyid = async (id) => {
    await axios.delete(`http://localhost:3000/authors/${id}`)

}
//add item
export const addelement = async (newelement) => {
    await axios.post(`http://localhost:3000/authors`, newelement)

}





