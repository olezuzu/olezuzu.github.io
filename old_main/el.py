



file = open(r"C:\Users\Ole\Desktop\ole\periode_site\elements.txt")

output = open(r"C:\Users\Ole\Desktop\ole\periode_site\elements_numberless.txt", "w")

numbers = "1234567890"

sorted_list = []

for line in file:
    line = line.replace("0","")
    line = line.replace("1","")
    line = line.replace("2","")
    line = line.replace("3","")
    line = line.replace("4","")
    line = line.replace("5","")
    line = line.replace("6","")
    line = line.replace("7","")
    line = line.replace("8","")
    line = line.replace("9","")
    line = line.replace("\t","")
    output.write(line)
        