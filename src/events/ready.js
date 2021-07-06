module.exports = async (client) => {  

    const users = await client.users.cache.size;
    const guilds = await client.guilds.cache.size;

    const statusList = [
      { msg: `with over ${users} users!`, type: "PLAYING" },
      { msg: `in over ${guilds} servers!`, type: "PLAYING" },
    ];
  
    setInterval(async () => {
      const index = Math.floor(Math.random() * statusList.length + 1) - 1;
      await client.user.setActivity(statusList[index].msg, {
        type: statusList[index].type,
      });
    }, 60000);
  
  console.clear();
  console.log('\n\x1b[33m%s\x1b[0m', `$[Event]: Attempting to login...`);
  console.log('\n\x1b[32m%s\x1b[0m', `$[INFO]: Logged in as ${client.user.tag} successfully!`);
  } 