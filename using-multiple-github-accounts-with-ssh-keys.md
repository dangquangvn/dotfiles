# Problem
I have two Github accounts: oanhnn (personal) and superman (for work). I want to use both accounts on same computer (without typing password everytime, when doing git push or pull).

Solution
Use ssh keys and define host aliases in ssh config file (each alias for an account).

# How to?
1. [Generate ssh key pairs for accounts](https://help.github.com/articles/generating-a-new-ssh-key/) and [add them to GitHub accounts](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

2. Edit/Create ssh config file (`~/.ssh/config`):
```sh
# Default github account: oanhnn
Host github.com
   HostName github.com
   IdentityFile ~/.ssh/oanhnn_private_key
   IdentitiesOnly yes
   
# Other github account: superman
Host github-superman
   HostName github.com
   IdentityFile ~/.ssh/superman_private_key
   IdentitiesOnly yes
```

3. [Add ssh private keys to your agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent):
```sh
$ ssh-add ~/.ssh/oanhnn_private_key
$ ssh-add ~/.ssh/superman_private_key
```

4. Test your connection
```sh
$ ssh -T git@github.com
$ ssh -T git@github-superman
```
With each command, you may see this kind of warning, type `yes`:
```sh
The authenticity of host 'github.com (192.30.252.1)' can't be established.
RSA key fingerprint is xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:
Are you sure you want to continue connecting (yes/no)?
```
If everything is OK, you would see these messages:
```sh
Hi oanhnn! You've successfully authenticated, but GitHub does not provide shell access.
```
```sh
Hi superman! You've successfully authenticated, but GitHub does not provide shell access.
```

5. Now all are set, just clone your repositories
```
$ git clone git@github-superman:org2/project2.git /path/to/project2
$ cd /path/to/project2
$ git config user.email "superman@org2.com"
$ git config user.name  "Super Man"
```
Done! Goodluck!
