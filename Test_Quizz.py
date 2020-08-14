print ("""Pour vous quel est le meilleur schtroumpfs ?
     a. Le grand schtroumpf
     b. Le schtroumpf paresseux
     c. Le Schtroumpf a lunettes
     d. La Schtroumpfette""")


messages = ["Vous aimez être le boss","Je vous conseil un lit king size","Le savoir c'est le pouvoir! ou pas","Chacun ses goût"]


def create_message(answer2):
     if answer2=="a":
          message = messages[0]
     if answer2=="b": 
          message = messages[1]
     if answer2=="c": 
          message = messages[2]
     if answer2=="d":
          message = messages[3]
     return message

answer2=input('Votre reponse:')
message = create_message(answer2)
print(message)


#print("Pour information voici en pourcentage la préférence des schtroumpfs dans les réponses")
#array = ["a= 22%","b= 10%", "c= 45%","d= 23% "]
#for r in array:
    #print(r)















