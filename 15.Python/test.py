print("Hello world!")

x,y = 100,200
print(x==y)

a=["a","b","c"]
for i in a:
    print(i)

class arr:
    b=["Seoul","Kyeonggi","Inchon","Daegu","Busan"]
str=''
for item in arr.b:
    str = str+ item[0]
print(str)

data=[[1,2,3],[4,5],[6,7,8,9]]
print(data[0]) #[1,2,3]
print(data[2][1]) #7

for sub in data:
    for one in sub:
        print(one,end=" ")
    print()

string = input("7문자 이상 문자열을 입력하세요:")
m = string[0:3] + string[-3:]
print(m)