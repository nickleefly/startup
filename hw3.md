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
