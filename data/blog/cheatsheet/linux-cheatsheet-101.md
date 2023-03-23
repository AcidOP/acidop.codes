---
title: The Ultimate Linux Cheat Code Handbook
date: '2023-03-23'
tags: ['cheatsheet']
draft: false
summary: You think you know Linux? Think again. With this cheat code handbook, you'll be hacking your way to total system domination in no time. No more begging for help on forums or struggling with confusing command lines. Get your copy now and start pwning the competition like the badass you are!
images: []
layout: PostLayout
canonicalUrl:
authors: ['default']
---

You think you know Linux? Think again. With this cheat code handbook, you'll be hacking your way to total system domination in no time. No more begging for help on forums or struggling with confusing command lines. Get your copy now and start pwning the competition like the badass you are!

<br />

<TOCInline toc={props.toc} toHeading={3} indentDepth={3} />

<br />

# Basic System Commands

| Command | Description                                       |
|---------|---------------------------------------------------|
| cat     | displays the contents of a file                   |
| pwd     | displays the current working directory            |
| cd      | changes the current directory                     |
| ls      | lists the contents of a directory                 |
| cp      | copies files and directories                      |
| mv      | moves or renames files and directories            |
| rm      | removes files and directories                     |
| mkdir   | creates a new directory                           |
| rmdir   | removes an empty directory                        |
| chmod   | changes the permissions of a file or directory    |
| ps      | displays information about running processes      |
| top     | displays real-time information about system usage |
| kill    | terminates a process                              |
| shutdown| shuts down the system                             |


# File Commands

| Command | Description                                        |
|---------|----------------------------------------------------|
| ls      | lists the files of a directory                     |
| ls -l   | lists the files of a directory in long format      |
| ls -a   | lists all files of a directory, including hidden   |
| pwd     | displays the current working directory             |
| cd      | changes the current directory                      |
| cd ~    | changes the current directory to the home directory|
| cd ..   | changes the current directory to the parent        |
| cd -    | changes the current directory to the previous      |
| cd /    | changes the current directory to the root          |
| mkdir   | creates a new directory with the specified name    |
| rmdir   | removes the directory with the specified name      |
| touch   | creates a new file with the specified name         |
| cp      | copies files and directories                       |
| mv      | moves or renames files and directories             |
| rm      | removes files and directories                      |
| rm -r   | removes files and directories recursively          |
| rm -f   | removes files and directories forcefully           |
| rm -rf  | removes files and directories forcefully recursively|

# File Permissions

| Command               | Description                                            |
|-----------------------|--------------------------------------------------------|
| chmod 777 file        | Gives Read, Write and Execute permissions to everyone  |
| chmod 755 file        | Give read, write, and execute permission to owner, and read and execute permission to group and others|
| chmod 644 file        | Give read and write permission to owner, and read permission to group and others|
| chown user file       | changes the owner of a file                            |
| chown user:group file | changes the owner and group of a file                  |
| chmod u+x file        | gives execute permission to the owner                  |
| chmod g+x file        | gives execute permission to the group                  |

# Users and Groups

| Command               | Description                                            |
|-----------------------|--------------------------------------------------------|
| id                    | displays the user and group IDs                        |
| id user               | displays the user and group IDs for a specific user    |
| whoami                | displays the current user                              |
| who                   | displays who is logged on                              |
| who -a                | displays who is logged on and what they are doing      |
| last                  | displays the last logged in users                      |
| adduser user          | adds a new user                                        |
| usermod -aG group user| adds a user to a group                                 |
| groupadd group        | adds a new group                                       |
| userdel user          | deletes a user                                         |
| usermod               | modifies a user account                                |
| chgrp group file      | changes the group ownership of a file                  |

# Package Management (Needs `sudo`)

| Command               | Description                                            |
|-----------------------|--------------------------------------------------------|
| apt update            | updates the package lists                              |
| apt upgrade           | upgrades the installed packages                        |
| apt install package   | installs a package                                     |
| apt remove package    | removes a package                                      |
| apt autoremove        | removes packages that are no longer needed             |
| apt search package    | searches for a package                                 |
| apt purge package     | removes a package and its configuration files          |
| apt clean             | removes downloaded package files                       |
| apt autoclean         | removes old downloaded package files                   |


# SSH

| Command               | Description                                            |
|-----------------------|--------------------------------------------------------|
| ssh user@host         | connects to a remote host using SSH                    |
| ssh -p port user@host | connects to a remote host using SSH on a specific port |
| ssh-keygen            | generates a new SSH key pair                           |
| ssh-copy-id user@host | copies the SSH key to the remote host                  |
| ssh -i key user@host  | connects to a remote host using a specific SSH key     |
| scp file user@host:   | copies a file to a remote host                         |

# System Info

| Command               | Description                                            |
|-----------------------|--------------------------------------------------------|
| uname                 | print system information                               |
| uname -a              | displays all system information                        |
| uname -r              | displays the kernel release                            |
| uname -m              | displays the machine hardware name                     |
| uname -n              | displays the network node hostname                     |
| hostname              | displays the network node hostname                     |
| hostname -I           | displays All IP address                                |
| uptime                | displays how long the system has been running          |
| whoami                | displays the current user                              |
| df                    | displays the amount of disk space available            |
| man                   | displays manual page                                   |

# Privilege Escalation

| Command | Description                                        |
|---------|----------------------------------------------------|
| sudo    | allows a user to execute a command as the superuser|
| su      | allows a user to execute a command as another user |
| sudo su | allows a user to execute a command as the superuser|
| sudo -i | allows a user to execute a command as the superuser|
| sudo -u | allows a user to execute a command as another user |
| sudo -l | allows a user to list the allowed commands         |

# Archiving

| Command                  | Description                                         |
|--------------------------|-----------------------------------------------------|
| tar -cvf archive.tar     | creates a new archive                               |
| tar -xvf archive.tar     | extracts files from an archive                      |
| tar -tvf archive.tar     | lists the contents of an archive                    |
| tar -cvzf archive.tar.gz | creates a new compressed archive                    |
| zip archive.zip file     | creates a new archive in ZIP format                 |
| unzip archive.zip        | extracts files from an archive in ZIP format        |

# Searching

| Command                  | Description                                         |
|--------------------------|-----------------------------------------------------|
| grep pattern file        | searches for a pattern in a file                    |
| grep -r pattern dir      | searches for a pattern in a directory recursively   |
| grep -v pattern file     | searches for all lines that do not contain a pattern|
| grep -i pattern file     | searches case-insensitively for a pattern in a file |
| grep -l pattern file     | displays the names of files that contain a pattern  |
| locate file              | searches for a file in the database                 |
| find dir -name file      | searches for a file in a directory                  |
| find .                   | searches for files in the current directory         |
| find / -name file        | searches for a file in the entire system            |
| find / -name file -type f| searches for a file in the entire system for file types|

# Process Management

| Command                  | Description                                         |
|--------------------------|-----------------------------------------------------|
| ps                       | displays your currently active processes            |
| ps -ef                   | displays all processes                              |
| top                      | displays all processes                              |
| kill pid                 | kills the process with the specified process ID     |
| killall process          | kills all processes with the specified name         |
| bg                       | List and resume stopped jobs in the background      |
| fg                       | Bring the most recently suspended job to the foreground|

# Networking

| Command                  | Description                                         |
|--------------------------|-----------------------------------------------------|
| ifconfig                 | displays the network interfaces                     |
| ifconfig -a              | displays all network interfaces                     |
| ifconfig eth0            | displays the network interface eth0                 |
| iwconfig                 | displays the wireless network interfaces            |
| systemctl stop NetworkManager | stops the NetworkManager service               |
| systemctl start NetworkManager| starts the NetworkManager service              |
| systemctl restart NetworkManager| restarts the NetworkManager service          |
| whois domain             | displays whois information for a domain             |
| dig domain               | performs DNS lookup for a domain                    |
| host domain              | performs DNS lookup for a domain                    |
| nslookup domain          | performs DNS lookup for a domain                    |
| ping domain              | pings a domain and displays the result              |

# Keyboard Shortcuts

| Command                  | Description                                         |
|--------------------------|-----------------------------------------------------|
| Ctrl + C                 | Stops the current command                           |
| Ctrl + Z                 | Backgrounds the current command                     |
| Ctrl + D                 | Logs out the current user                           |
| Ctrl + A                 | Moves the cursor to the beginning of the line       |
| Ctrl + E                 | Moves the cursor to the end of the line             |
| Ctrl + L                 | Clears the terminal screen                          |
| Ctrl + Shift + C         | Copies the selected text                            |
| Ctrl + Shift + V         | Pastes the selected text                            |
| Ctrl + Shift + T         | Opens a new tab in the current window               |
| Ctrl + Shift + N         | Opens a new window in the current session           |
| Ctrl + Shift + Q         | Closes the current window                           |
| !!                       | Repeats the previous command                        |
| exit                     | Exits the current shell                             |