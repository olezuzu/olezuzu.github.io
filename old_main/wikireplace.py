
# shitty one-time use code


source = open(r"C:\Users\Ole\Desktop\ole\periode_site\periodeanker\index.html", "r+")

source_list = source.readlines()

google = "https://www.google.com"

wiki = "https://de.wikipedia.org/wiki/"

elements = open(r"C:\Users\Ole\Desktop\ole\periode_site\elements_program_order.txt")

elements_list = []

count = 0

for line in elements:
    elements_list.append(line.replace("\n", "").lower())
    
for line in range(len(source_list)):
    if google in source_list[line]:
        source_list[line] = source_list[line].replace(google, wiki + elements_list[count])
        count += 1
              
source.close

output = open(r"C:\Users\Ole\Desktop\ole\periode_site\periodeanker_wiki\index.html", "a")

for line in source_list:
    output.write(line)
    


