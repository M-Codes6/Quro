export const surahs = Array.from({ length: 114 }, (_, i) => {

const id = i + 1

return {

id,
name: `Surah ${id}`,
english: "",
arabic: "",
verses: "",

}

})