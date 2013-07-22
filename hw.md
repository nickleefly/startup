hw3
1. sed
2. 10
3. ldd
4. xargs -P
5. python -c 'import os, re; print [xx for xx in os.listdir(".") if re.search("py$",xx)]'
6. awk
7. Counts the number of lines in the ptt file
8. grep protein NC_007779.ptt | wc -l
   cat NC_007779.ptt | grep protein | wc -l
9. awk 'NR==123' NC_007779.ptt
   cat NC_007779.ptt | head -123 | tail -1
   sed -n '123p' NC_007779.ptt
10. echo `wc -c NC_007779.ptt`
11. ln -s
12. git push
13. git remote add
14. 50ff86b66254abeb42b2aa5eabe915e18c359ac0
15. It makes it easy to rebuild a remote environment just like the one you've been using, and eases deployment.

hw5.1
1 aws
2 heroku
3 except "Github is a command line tool, while git is a cloud service"

4 An IAAS service provides command line and/or root access to its machines.   

An IAAS service allows you to provision, tear down, and set up new virtual machines programmatically

5 except 
An PAAS service must provide access to Linux virtual machines in the cloud
and
A PAAS service encourages low-level control over every aspect of your deployment servers

6 except "Linux is the same as Berkeley Software Distribution (BSD)"

7 except
Primarily historical reasons
and 
Virtual machines have better performance than physical servers

8 The three standard streams that Unix programs use to receive and send information to their environment

The conventional ways to pipe data into a Unix command line program, to output data, and to output any error messages

9 It allows you to edit code on a remote machine, disconnect, and resume where you left off

10 A word processor is primarily intended to produce documents which are read by humans, while a text editor is capable of producing documents that are read by machines

A word processor will not show you the raw characters which you are editing, but these can be important for computer programming

11 Because the dev environment is not exactly the same as the production environment, while staging is
12 excepe "Redundancy and duplication of source code"
13 20%
14 Hardware sales of iPhones and iPads
15 Mobile advertising
16 except
All Android apps only work online, while ChromeOS apps work offline.
and
All ChromeOS apps only work online, while Android apps work offline.

17 all
18 except "A qualititative diagnosis by an expert physician"
