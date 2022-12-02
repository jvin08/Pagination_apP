const paginate = (followers) => {
  const itemsPerPage = 7;
  const pages = Math.ceil(followers.length / itemsPerPage);
  //create new array from array
  const newFollowers = Array.from({length:pages},(_, index)=>{
    const start = index * itemsPerPage;
    // console.log(followers.slice(start, start + itemsPerPage))
    return followers.slice(start, start + itemsPerPage);
  });
  return newFollowers;
}

export default paginate
