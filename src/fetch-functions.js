export const getFirstThreeFantasyBooks = async () => {
    try {
        const response = await fetch(`https://openlibrary.org/subjects/fantasy.json`);
        if (!response.ok) throw new Error (`Failed to get fantasy books`);
        const data = await response.json();
        const works = data.works;
        let worksArr = [];
        works.forEach((obj, index) => {
            if (index < 3){
                const worksObj = {
                    title : obj.title ,
                    author : { name : obj.authors[0].name ,urlKey : obj.authors[0].key } ,
                    coverUrl : `https://covers.openlibrary.org/a/id/${obj.cover_id}-M.jpg`
                };
                worksArr.push(worksObj);
            };
        });
        return worksArr;
    } catch (error) {
        console.warn(error);
        return null;
    };
};

export const getAuthor = async (urlKey) => {
    try {
        const response = await fetch(`https://openlibrary.org${urlKey}.json`);
        if (!response.ok) throw new Error (`Failed to get author`);
        const data = await response.json();
        const authorObj = {
            birthDate : data.birth_date ,
            bio : data.bio ,
            wikipediaUrl : data.wikipedia ,
            name : data.name ,
            pictureUrl : `https://covers.openlibrary.org/a/id/${data.photos[0]}-M.jpg`
        }
        return authorObj;
    } catch(error) {
        console.warn(error);
        return null;
    };
};
// getAuthor(`/authors/OL22098A`);
export const createNewUser = async (newUserData) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newUserData)
        })
        if (!response.ok) throw new Error (`Failed to create new user`);
        const data = await response.json();
        return data;

    } catch(error) {
        console.warn(error);
        return null;
    }
}