const initialState = {
    movies: [
        {
            id:1,
            image: "../../assets/images/part1.jpg",
            title: "Jojo's Bizzare Adventure Phantom Blood"
        },
        {
            id:2,
            image: "../../assets/images/part2.jpg",
            title: "Jojo's Bizzare Adventure: Battle Tendency"
        }

    ]
}

const movies = (state = initialState, action) => {
    switch(action.type) {
    default:
        return {
            ...state
        }
    }
}

export default movies
