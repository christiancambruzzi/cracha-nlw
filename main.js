const socialMediaLinks = {
  github: 'christiancambruzzi',
  youtube: 'christiancambruzzi',
  facebook: 'christiancambruzzi',
  instagram: 'christiancambruzzi',
  twitter: 'cmbrzz'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('id')

    li.children[0].href = `http://${social}.com/${socialMediaLinks[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`

  // alert(url)
  //arrow functions - não precisa das chaves quando é apenas uma função {response.json()} = response,json()
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  })
}

getGitHubProfileInfos()
