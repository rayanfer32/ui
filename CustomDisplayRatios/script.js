h = 9
w = 19

ratios = {1:'19:9',2:'16:9',3:'4:3'}

for res in ratios:
	print(res,ratios[res])

w,h = ratios[int(input("select a display ratio:"))].split(':')
w,h = int(w),int(h)
mode = input("select mode:\n1: multplier \n2: Equate")

while true{
	if mode == "1":
		userin = input("enter scaling multiplier:(type 'std' for stanndard reso's: ")
		if userin == "standards":
			for i in range(30,300,2):
				mul = i
				wid,sep,hei = float(w*mul),'x',float(h*mul)
				print(wid,sep,hei)
		else:
			mul = float(userin)
			wid,sep,hei = float(w*mul),'x',float(h*mul)
			print(wid,sep,hei)
	if mode == "2":
		userWidth = int(input("enter required width: "))#uw is userWidth
		scaler = userWidth/w
		userHeight = h*scaler
		print("Height suitable for ratio is :",userHeight