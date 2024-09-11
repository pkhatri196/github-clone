// controller contains functions related to API calls for particular route

export const getUserProfileAndRepos = async (req,res) =>{
    const {username} = req.params;  //this is an object
    
    try{
       const userRes = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      });
      const userProfile = await userRes.json();

      const reposRes = await fetch(userProfile.repos_url,{
         headers: {
          authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      });
      const repos = await reposRes.json();
      res.status(200).json({userProfile,repos});
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

// import { GitHubClient } from "../lib/axios-instance.js";

// export const getUserProfileAndRepos = async (req, res) => {
//   const { username } = req.params;
//   try {
//     const userProfile = await GitHubClient.get(`users/${username}`).then(
//       (res) => JSON.stringify(res.data)
//     );
//     const userRepos = await GitHubClient.get(userProfile.repos_url).then(
//       (res) => JSON.stringify(res.data)
//     );
//     res.send({ userProfile, userRepos });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
