import { useEffect, useState } from "react";
import "./instagram.css"

function Instagram() {
  const url =
    "https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption&limit=20&access_token=IGQVJVTGhQRWE0VnlId281cE15WkFTcGFhWGQxZATN5SEgyQjVFbHVEWDhqMUtlNVp3X29ITGFKV1lHYUJpLWRtQjg0RDMzTkpJT01TeWVBcFIyUkNGdzRZAZAVRYQS1ONFoxQjF4eEV6QXNVZA2NjYml4MQZDZD";

  const [allInsta, setAllInsta] = useState([]);
  const [errorInsta, setErrorInsta] =
    useState(null);

  useEffect(() => {
    fetch(url)
      .then((j) => j.json())
      .then(({ data }) => {
        const posts = data;
        setAllInsta(posts);
      })
      .catch((error) => {
        setErrorInsta(error);
      });
  }, []);

  return (
    <div className="instagram">
      <header className="heading">
        <h1>
          Show Instagram Feed on your Website
        </h1>
        <div className='line'></div>
      </header>
      {allInsta?.map((images) => (
        <div maxW="400px">
          <a href={images?.permalink}>
            <img
              style={{ width: "25%" }}
              src={images?.media_url}
              alt="l"
            ></img>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Instagram;


// import React from "react";
// // import './token.js'

// const Instagram = () => {
//   return (
//     <>
//       {/* <section className="popular top">
//         <div className="full_container">
//           <iframe
//             src="https://embedsocial.com/api/pro_hashtag/030566eafadbe170c9d34cfccc5663e3c2fe8a30"
//             width="100%"
//             height="500px"
//             frameborder="0"
//             marginheight="0"
//             marginwidth="0"
//           ></iframe>
//         </div>
//       </section> */}
      
//     </>
//   );
// };

// export default Instagram;
