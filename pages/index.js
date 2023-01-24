import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Toolbox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Next.js Toolbox" />
        <hr />
        <p className="description">
          
Kremniy elementining taqiqlangan zonasi ... ga teng.  
====
#1,12eV
====
>3eV
====
0,67eV
====
1,43eV

+++++

n -  turdagi  yarimo‘tkazgichda asosiy  zaryad  tashuvchilar ...
====
#elektronlar
====
kovaklar
====
musbat  ionlar
====
manfiy ionlar

+++++

n -  turdagi  yarimo‘tkazgichda qaysi  zaryad  tashuvchilar  tok xosil qiladi?
====
#elektronlar
====
kovaklar
====
musbat  ionlar
====
manfiy ionlar

+++++

p-  turdagi  yarimo‘tkazgichda asosiy  zaryad  tashuvchilar.
====
#kovaklar
====
musbat  ionlar
====
manfiy ionlar
====
elektronlar

+++++

p-   turdagi yarimo‘tkazgichda qaysi   zaryad  tashuvchilar  tok  xosil  qiladi?
====
#kovaklar
====
musbat  ionlar
====
manfiy ionlar
====
elektronlar

+++++

p- turdagi yarimo‘tkazgich bu ...
====
#akseptorli yarimo‘tkazgich
====
to‘liqsiz yarimo‘tkazgich
====
donor kirishmalar konsentratsiyasi akseptor kirishmalar konsentratsiyasiga teng yarimo‘tkazich
====
donorli yarimo‘tkazgich

+++++

i- turdagi yarim o‘tkazgich  bu …
====
#xususiy yarimo‘tkazgich
====
akseptorli yarimo‘tkazgich
====
donor kirishmalar konsentratsiyasi akseptor kirishmalar konsentratsiyasiga teng yarimo‘tkazich
====
donorli yarimo‘tkazgich

+++++

n-turdagi  yarimo‘tkazgich bu ...
====
#donorli yarimo‘tkazgich
====
xususiy yarimo‘tkazgich
====
akseptorli yarimo‘tkazgich
====
donor kirishmalar konsentratsiyasi akseptor kirishmalar konsentratsiyasiga teng yarimo‘tkazich

+++++

Qaysi element elektr maydon energiyasini o‘ziga zaxira qilish qobiliyatiga ega?
====
#Kondensator
====
Transformator
====
Generator
====
Rezistor

+++++

Ketma-ket ulangan nominali 9 Om dan  bo‘lgan 3 ta bir xil   rezistorning umumiy  qarshiligini toping.   
====
#27 Om
====
3 Om
====
36 Om
====
18 Om

+++++

Paralel ulangan nominali 9 Om dan  bo‘lgan 3 ta bir xil   rezistorning umumiy  qarshiligini  toping.
====
#3 Om
====
27 Om
====
36 Om
====
18 Om

+++++

Zanjirda kuchlanish o‘zgarmas bo‘lganda, qarshilikning qiymati ikki marta kamaysa, tokning qiymati …
====
#2 marta ortadi
====
2 marta kamayadi
====
o‘zgarmaydi
====
4 marta ortadi

+++++

Sinusoidal tokning chastotasi 50 Hz bo‘lsa, uning davri qanchaga teng bo‘ladi.
====
#0,02 sek
====
0,002 sek
====
0,2 sek
====
2 sek

+++++

Sinusoidal tokning chastotasi 100 Hz bo‘lsa, uning davri qanchaga teng bo‘ladi.
====
#0,01 sek
====
0,002 sek
====
0,2 sek
====
2 sek

+++++

O‘tkazgichning qarshiligi  10 Om, undagi  tok  kuchi 5 A bo‘lsa, u yerdagi kuchlanish  kanchaga  teng?  
====
#50V
====
32V
====
73V
====
91V

+++++

Rezonans paytda, ketma-ket ulangan tebranish konurining qutblaridagi  kuchlanish miqdori   U=100 V, qarshilik miqdori   R=100 Om, L=10 mGn va C=10 mkF bo‘lsa, u yerdagi  tok  miqdori qanchaga  teng?
====
#1A
====
2A
====
2,5A
====
0,5A

+++++

Rezonans paytda, ketma-ket ulangan tebranish konurining qutblaridagi  kuchlanish miqdori U=10 V, qarshilik miqdori R=5 Om, L=10 mGn va C=10 mkF bo‘lsa, u yerdagi  tok  miqdori qanchaga  teng?
====
#2A
====
2,6A
====
3,6A
====
7,9A

+++++

O‘tkazgichning qarshiligi  100 Om, undagi  tok  kuchi 6 mA bo‘lsa, u yerdagi kuchlanish  kanchaga  teng?  
====
#0,6V
====
50V
====
5V
====
30V
====


+++++

O‘tkazuvchanlikning o‘lchov birligini ko‘rsating.
====
#Simens
====
Om
====
Amper
====
Volt

+++++

Yuklamada iste’mol qilinadigan tokni o‘lchash uchun “Ampermetr” zanjirga qanday ulanadi?
====
#yuklama qarshiligiga ketma-ket
====
yuklama qarshiligiga parallel
====
yuklama qarshiligiga perpendikulyar
====
aralash

+++++

Elektr sig‘im (kondensator) quyidagi vazifani bajaradi.
====
#elektr maydon energiyasini yig‘adi
====
magnit maydon energiyasini yig‘adi
====
elektr energiyasini issiqlik energiyasiga aylantiradi
====
elektr tokni kuchaytiradi

+++++

Kuchlanishni o‘lchash uchun “Voltmetr” o‘chov asbobini elektr zanjiriga qanday ulash lozim?
====
#yuklama qarshiligiga parallel
====
yuklama qarshiligiga ketma-ket
====
yuklama qarshiligi ichiga
====
aralash

+++++

Elektr zanjir bu - …
====
#elektr tokini o‘tkazish uchun xizmat qiladigan elementlar yig‘indisi
====
qurilma yoki zanjirlarni modellashtirish, o‘rganish va taxlil qilish uchun mo‘ljallangan dasturiy ta’minot
====
elektr toki oqib o‘tmaydigan elementlar yig‘indisi 
====
yorug‘lik energiyasini isiqlik energiyaga aylantiruvchi optik qurilma

+++++

Rezistiv element quyidagi xossalar yordamida ifodalanadi.
====
#volt-amper xarakteristikasi
====
veber-amper xarakteristikasi
====
genri-amper xarakteristikasi
====
kulon-volt xarakteristikasi

+++++

Zanjirning uch va undan ortiq shaxobchalar ulangan joyi – … deb ataladi.
====
#tugun
====
mustaqil kontur
====
shaxobcha
====
kontur

+++++

Zanjirning, faqat bitta tok oqib o‘tadigan qismi qanday ataladi?
====
#shaxobcha
====
kontur
====
tugun
====
mustaqil kontur

+++++

Zanjirni kontur toklar usuli bilan hisoblashda qaysi qonunlar qo‘llaniladi:
====
#Kirxgofning birinchi va ikkinchi qonuni
====
Faradeyning birinchi va ikkinchi qonuni
====
Djaulning birinchi va ikkinchi qonuni
====
Amperning birinchi va ikkinchi qonuni

+++++

Transformatorning asosiy vazifasi quyidagicha:
====
#o'zgaruvchan elektr tokini, chastotasini o‘zgartirmagan holda, kuchlanishni pasaytiradi yoki oshiradi
====
o‘garmas tokni o‘zgaruvchan tokka aylantirib berish
====
o‘zgaruvchan tokni o‘zgarmas aylantirib berish
====
kirishdagi tokning tebranish chastotasini o‘zgartirib berish

+++++

Elektrotexnikada diodlar asosan …… foydalaniladi:
====
#to‘g‘rilagichlarda
====
isitgich asboblarida
====
transformatorlarda
====
elektro-dvigatellarda

+++++

Zanjirda qurilmalarning bog‘lanish usullari tasvirlangan chizmalar … deyiladi.
====
#sxema
====
grafik
====
eskiz
====
diogramma

+++++

Elektr qarshilikning o‘lchov birligi …
====
#Om
====
Amper
====
Vatt
====
Volt

+++++

Sanoat elektr tarmog‘iga parallel ulanadigan iste’molchilar, … mo‘ljallangan bo‘lishi lozim.
====
#sanoat elektr tarmog‘i kuchlanishiga
====
turlicha kuchlanishlarga
====
12 V kuchlanishga
====
36 V kuchlanishga

+++++

Atom umumiy holda – … bo‘ladi.
====
#neytral
====
manfiy zaryadlangan
====
musbat zaryadlangan
====
molekulalardan tashkil topgan

+++++

Qanday moddalar elektr tokining o‘tkazgichi bo‘lib xizmat qiladi? 
====
#erkin elektronlari bo‘lgan moddalar
====
qattiq kristall panjarasi bo‘lgan moddalar
====
dielektriklar
====
suyuq kristall panjarali moddalar

+++++

To‘liq zanjir uchun Om qonuni qaysi javobda keltirilgan?
====
#I=E/(R+r)
====
I=U/R
====
Q=I2Rt
====
R=P2/S

+++++

Reaktiv qarshilikli zanjir – bu … 
====
#Induktivlik yoki kondensatorlari bo‘lgan zanjir
====
istalgan o‘zgarmas tok zanjiri
====
rezistiv zanjiri bo‘lgan zanjir
====
istalgan o‘zgarmas tok yopiq zanjiri

+++++

Agar kuchlanish o‘zgarmagan holda, kondensator qatlamlari orasidagi masofa ortsa, kondensatorning zaryadi …
====
#kamayadi
====
ortadi
====
o‘zgarmaydi
====
chiziqlikka intiladi

+++++

Quyidagi sanab o‘tilgan metallardan qaysi biri yuqori elektr o‘tkazuvchanlikga ega?
====
#kumush
====
alyuminiy
====
volfram
====
po‘lat

+++++

Kondensatorning sig‘imi … bog‘liq.
====
#plastinalar yuzasi va ular orasidagi masofaga
====
ketma-ket ulangan yuk qarshiligiga
====
zanjirdagi tok kuchiga
====
qutblardagi kuchlanishga                                                                                      

+++++

Elektr energiyasini mexanik energiyaga aylantiruvchi qurilma … deyiladi.
====
#elektrodvigatel
====
transformator
====
generator
====
induktiv g‘altak

+++++

Sig‘imning reaktiv qarshiligini ifodalovchi formulani toping.
====
#XC=1/2πfC
====
XL=2πfL
====
R=U/I
====
R=I/U

+++++

Bipolyar tranzistorning aktiv  ish rejimida:
====
#Chiqish  toki  kirish tokiga  to‘g‘ri proporsional
====
Chiqish  toki  kirish qarshiligiga  to‘g‘ri proporsional
====
Chiqish  toki  kirish sig‘imiga  to‘g‘ri proporsional
====
Chiqish  kuchlanishi  kirish qarshiligiga   to‘g‘ri proporsional  

+++++

O‘tkazgichdagi tok kuchi …
====
#o‘tkazgich qarshiligiga teskari proparsional
====
o‘tkazgich qarshiligiga to‘g‘ri proparsional
====
o‘tkazgich kesimiga to‘g‘ri proparsional
====
o‘tkazgich kesimiga nisbatan nochiziqli

+++++

Asosiy elektr energiya manbalari bu …
====
#issiqlik, atom va gidroelektro-stansiyalar
====
to‘g‘rilagichlar
====
issiqlik asboblari
====
yoritgich asboblari

+++++

Elektr zanjirning tugunidagi toklarning algebraik yig‘indisi 0 ga teng. Bu qaysi qonunga tegishli ta’rif?
====
#Kirxgofning birinchi qonuni
====
Kirxgofning ikkinchi qonuni
====
Om qonuni
====
Djoul – Lens qonuni

+++++

O‘zbekistonda qanday chastotali o‘zgaruvchan sinusoidal tokdan foydalaniladi?
====
#50 Hz
====
60 Hz
====
75 Hz
====
100 Hz

+++++

Qarshilikning o‘lchov birliklarini ko‘rsating.
====
#Om, kOm, MOm 
====
F, mF, mkF
====
V, mV, mkV
====
A, mA, mkA

+++++

Sig‘im ning o‘lchov birliklarini ko‘rsating.
====
#F, mF, mkF
====
Om, kOm, MOm
====
V, mV, mkV
====
A, mA, mkA

+++++

Tok kuchining o‘lchov birliklarini ko‘rsating.
====
#A, mA, mkA
====
F, mF, mkF
====
Om, kOm, MOm
====
V, mV, mkV

+++++

Elektr kuchlanishining o‘lchov birliklarini ko‘rsating.
====
#V, mV, mkV
====
A, mA, mkA
====
F, mF, mkF
====
Om, kOm, MOm

+++++

Induktivlikning o‘lchov birliklarini ko‘rsating.
====
#G, mG, mkG
====
A, mA, mkA
====
F, mF, mkF
====
Om, kOm, MOm

+++++

Elektr zanjirda tok kuchining o‘lchov birligi nimada o‘lchanadi?
====
#Amper
====
Volt
====
Vatt
====
Om

+++++

Ikkita p-n o‘tishga va uchta elektrodga ega bo‘lgan, signallarni tok, kuchlanish va quvvat bo‘yicha kuchaytiruvchi yarimo‘tkazgichli asbob qanday ataladi?
====
#bipolyar tranzistor
====
unipolyar tranzistor
====
diod
====
stablitron

+++++

Yuqori va o‘ta yuqori chastotali qurilmalarda ishlatish uchun mo‘ljallangan diodlar qanday nomlanadi?
====
#yuqori chastotali diodlar
====
to‘g‘rilovchi diodlar
====
impulsli diodlar
====
tunelli diodlar

+++++

Diffuziya tokiga qarama-qarshi yo‘nalgan va kuchlanganlik ta’siri ostidagi noasosiy zaryad tashuvchilarning harakatini ifodalovchi tok qanday ataladi?
====
#dreyf
====
teshikli
====
teskari
====
elektron

+++++

Yarimo‘tkazgichli asboblarni ko‘rsating.
====
#diod, tiristor, tranzistor
====
induktivlik, qarshilik, stablitron
====
kodensator, transformator, simistor
====
induktivlik, kodensator, MDYa tranzistor

+++++

O‘nlab gersdan o‘nlab kilogersgacha diapazonda uzluksiz, davriy signallarni kuchaytirishga xizmat qiluvchi qurilma bu - …
====
#past chastota kuchaytirgichi
====
impulsli kuchaytirgich
====
doimiy tok  kuchaytirgichi
====
yuqori chastotali kuchaytirgich

+++++

Elektr zanjirida tok kuchi qaysi harf bilan ifodalanadi?
====
#I
====
U
====
F
====
R

+++++

Elektr zanjirida kuchlanish qaysi harf bilan ifodalanadi?
====
#U
====
I
====
R
====
L

+++++

Elektr zanjirida aktiv qarshilik qaysi harf bilan belgilanadi?
====
#R
====
U
====
I
====
C

+++++

Elektr zanjirida kondensator qaysi harf bilan belgilanadi?
====
#C
====
L
====
R
====
U

+++++

Elektr zanjirida induktiv g‘altak qaysi harf bilan belgilanadi?
====
#L
====
C
====
R
====
U

+++++

Elektr zanjirida EYUK manbasi qaysi harf bilan belgilanadi?
====
#E
====
L
====
R
====
I

+++++

Elektr zanjirida tok manbai qaysi harf bilan belgilanadi?
====
#J
====
E
====
C
====
R

+++++

Metall o‘tkazgichlar qanday belgilar bilan xarakterlanadi?
====
#tarkibidagi erkin elektronlar bilan
====
tarkibidagi erkin ionlar bilan
====
tarkibida erkin elektronlar va ionlarning yo‘qligi bilan
====
tarkibidagi erkin elektronlar va ionlar bilan

+++++

Elektr zanjirining parallel qismida:
====
#kuchlanish bir xil
====
qarshilik bir xil
====
tok bir xil
====
quvvat bir xil

+++++

O‘zgarmas elektr toki qaysi tomonga oqadi.
====
#Potensiyali katta nuqtadan potensiali kichik nuqtaga tomon
====
Potensiali kichik nuqatadan potensiali katta nuqtaga tomon
====
Potensial kattaligiga bog‘liq bo‘lmagan holda, erkin yo‘nalishda
====
Potensial kattaligiga bog‘liq bo‘lmagan holda, berilgan yo‘nalishda

+++++

 “Statik elektr energiya” nima?
====
#Tabiatda paydo bo‘luvchi elektr energiya (chaqmoq, razryad)
====
Dvigatel ishlab chiqaruvchi elektr energiya
====
AES da ishlab chiqaruvchi elektr energiya
====
GES da ishlab chiqaruvchi elektr energiya

+++++

Afsonaviy serb olimi Nikola Tesla elektr energiyani … yordamida uzoq masofalarga uzatish ustida ishlagan.
====
#o‘zgaruvchan tok
====
statik elektrlash
====
doimiy tok
====
impuls tok

+++++

Tomas Edison – dunyodagi birinchi … yaratuvchisi.
====
#cho‘g‘lanma lampalarining
====
atom elektro-stansiyalarining
====
yarimo‘tkazgichli diodning
====
tranzistorning

+++++

MDH standarti bo‘yicha tokning sanoat chastotasi qiymati qanday?
====
#50 Hz
====
50 MHz
====
100 Hz
====
60 Hz

+++++

Qanday qutblanishda diod orqali elektr toki o‘tadi?
====
#to‘g‘ri
====
aralash
====
to‘g‘ri emas
====
teskari

+++++

 “Sinusoida” qaysi tok turiga tegishli?
====
#o‘zgaruvchan
====
to‘g‘rilangan
====
doimiy 
====
impuls

+++++

Qaysi material ko‘proq tok o‘tkazadi?
====
#kumush
====
mis
====
alyuminiy
====
po‘lat

+++++

Aktiv qarshilikka ega zanjirda manba  energiyasi qaysi energiyaga  aylanadi?
====
#issiqlik 
====
elektr maydon
====
magnit  maydon
====
magnit, elektr  maydoni, issiqlik

+++++

Sinusoidal tokning ta’sir etuvchi qiymati uning amplituda qiymatidan necha marta kichik?
====
#0,707 marta
====
2 marta
====
0,5 marta
====
0,637 marta

+++++

Zanjirda EYUK E=24 V va R1=6 Om, R2=4 Om qarshiliklar ketma-ket ulangan. Zanjirdagi tokni qiymatini toping.
====
#2,4 A
====
1 A
====
6 A
====
9 A

+++++

Bipolyar  tranzistorning asosiy  ulanish sxemalariga quyidagilardan  qaysi biri kirmaydi:
====
#umumiy  zatvor
====
umumiy  emitter
====
umumiy  kollektor
====
umumiy  baza

+++++

Bipolyar tranzistorning qaysi  ish rejimi  avariya holatiga  olib keladi? 
====
#teshilish rejimi
====
aktiv rejimi
====
berk  rejimi
====
to‘yinish  rejimi

+++++

Bipolyar  tranzistorning aktiv ish  rejimida (KO‘) kollektor p-n o‘tish  ... potensial  to‘siq hosil qiladi:
====
#faqat  asosiy zaryad tashuvchilar uchun
====
faqat noasosiy zaryad tashuvchilar uchun
====
barcha  zaryad  tashuvchilar uchun
====
barcha zaryadlar  uchun

+++++

UK  (umumiy kollektor ) ulanish  sxemasi  uchun kirish  signali  bu …
====
#baza va kollektor orasidagi kuchlanish
====
baza va emitter orasidagi kuchlanish
====
emitter va kollektor orasidagi kuchlanish
====
zatvor va kollektor orasidagi kuchlanish

+++++

Dinistor bu – yarimo‘tkazgichli  asbob bo‘lib ... tashkil topgan:
====
#Uchta p-n o‘tishdan
====
ikkita p-n   o‘tishdan
====
bitta  p-n  o‘tishdan
====
to‘rtta   p-n  o‘tishdan

+++++

Zanjirda induktivlik elementi ...
====
#magnit maydoni energiyasini hosil qiladi
====
elektr maydon hosil qiladi  
====
elektr toki zaxirasini  hosil qiladi
====
elektr kuchlanishini zaxirasini qiladi

+++++

Konturga ta’rif bering.
====
#Bir necha shaxobcha va tugunlarni  o‘z ichiga  olgan zanjirning berk  qismi
====
Zanjirning ikki  nuqta  orasidagi  qismi
====
Zanjirning shunday qismiki undan bir xil tok oqib o‘tadi
====
Shaxobchalarning tutatish  nuqtasi

+++++

Zanjirni hisoblashda shahobcha toki ishorasi manfiy chiqsa, ...
====
#tok yo‘nalishi  noto‘g‘ri tanlangan
====
hisob kitob noto‘g‘ri bo‘lgan  
====
sxema noto‘g‘ri  tuzilgan  
====
kontur tokini yo‘nalishi  noto‘g‘ri olingan

+++++

Zanjirni hisoblashda tok ishorasi manfiy chiqsa, ...
====
#tokni yo‘nalishini teskari tomonga almashtirish lozim
====
sxemani  o‘zgartirish lozim
====
hisob kitobni tekshirish lozim
====
hisob kitob noto‘g‘ri bo‘lgan

+++++

Elektr zanjirlarni tugun potensiallari usulida hisoblashda tayanch nuqta potensiali qanchaga teng qilib olinadi.
====
#nolga  teng qilib olinadi
====
0.5 ga teng qilib olinadi
====
cheksizlikka teng  kilib olinadi
====
minus birga  teng qilib olinadi

+++++

Har birining induktivligi L=10 Hn ga teng uchta induktivlik g‘altaklari o‘zaro ketma-ket ulangan ummumiy induktivlikni toping.
====
#30 Hn
====
100 Hn
====
50 Hn
====
45 Hn

+++++

Har birining induktivligi L=50 Hn ga teng ikkita induktivlik g‘altaklari o‘zaro ketma-ket ulangan ummumiy induktivlikni toping.
====
#100 Hn
====
76 Hn
====
68 Hn
====
42 Hn

+++++

Har birining sig‘imi C=40 mkF ga teng ikkita kondensatorlar o‘zaro ketma-ket ulangan ummumiy sig‘imni toping.
====
#20 mkF
====
72 mkF
====
47 mkF
====
51 mkF

+++++

Har birining sig‘imi C=10 mkF ga teng ikkita kondensatorlar o‘zaro ketma-ket ulangan ummumiy sig‘imni toping.
====
#5 mkF
====
7 mkF
====
41 mkF
====
18 mkF

+++++

Har birining sig‘imi C=25 mkF ga teng ikkita kondensatorlar o‘zaro parallel ulangan ummumiy sig‘imni toping.
====
#50 mkF
====
79 mkF
====
41 mkF
====
18 mkF

+++++

Har birining sig‘imi C=10 mkF ga teng uchta kondensatorlar o‘zaro parallel ulangan ummumiy sig‘imni toping.
====
#30 mkF
====
89 mkF
====
31 mkF
====
28 mkF

+++++

Har birining sig‘imi C=20 mkF ga teng uchta kondensatorlar o‘zaro parallel ulangan ummumiy sig‘imni toping.
====
#60 mkF
====
9 mkF
====
1 mkF
====
13 mkF

+++++

Arsenid galiyning taqiqlangan zonasi ... ga  teng.
====
#1,43eV
====
>3eV
====
1,12eV
====
0,67eV

+++++
Elektr tokining issiqlik energiyasidan qaysi elektr qurilmalarda unumli foydalaniladi.
====
#elektrdazmollarda
====
elektrodvigatellarda
====
generatorlarda
====
transformatorlarda

+++++

Quyida keltirilgan manbalardan qaysi biri o‘zgaruvchan elektr tok manbai hisoblanadi.
====
#~220 V manba
====
akkumulyator
====
galvanik element
====
fotoelement

+++++

O‘zgaruvchan tokni o‘garmas tokga aylantirish uchun … foydalaniladi: 
====
#to‘g‘rilovchi diodlardan
====
elektrodvigatellardan
====
isitkich qurilmalaridan
====
yorug‘lik qurilmalaridan

+++++

Transformatorning vazifasi:
====
#o‘zgaruvchan tokni, chastotasini o‘zgartirmagan holda kuchlanish miqdorini oshiradi yoki tushuradi
====
o‘zgarmas tokni o‘zgaruvchan tokga aylantirib beradi
====
o‘zgaruvchan tokni o‘zgarmas tokga aylantirib beradi
====
transformator chiqishidagi tokning tebranish chastotasini o‘zgartirib beradi

+++++

Tok kuchining o‘lchov birligini ko‘rsating.
====
#Amper
====
Om
====
Vatt
====
Volt

+++++

Kuchlanishning o‘lchov birligini ko‘rsating.
====
#Volt
====
Om
====
Vatt
====
Amper

+++++

Qarshilikning o‘lchov birligini ko‘rsating.
====
#Om
====
Vatt
====
Amper
====
Volt

+++++

Elektr quvvatning o‘lchov birligini ko‘rsating.
====
#Vatt
====
Amper
====
Volt
====
Om

+++++

O‘zgaruvchan tok zanjiridagi aktiv quvvat P qanday xususiyatga ega?
====
#elektr energiyasini boshqa turdagi energiyaga aylantirish xususiyatiga
====
reaktiv elementlar va energiya manbai orasida elektromagnit maydonlar almashinuvi xususiyatiga
====
reaktiv elementlar va energiya manbai orasida elektr maydonlar almashinuvi xususiyatiga
====
elektr quvvatni boshqa energiya turlariga o‘rtalashtirish xususiyatiga

+++++

Elektr zanjiridagi aktiv quvvat P ning o‘lchov birligi qanday?
====
#Vatt (Vt)
====
Volt-Amper reaktiv (VAR)
====
Volt-Amper (VA)
====
Makrovatt

+++++

Elektr zanjiridagi reaktiv quvvat Q ning o‘lchov birligi qanday?
====
#Volt-Amper reaktiv (VAR)
====
Vatt (Vt)
====
Volt-Amper (VA)
====
Makrovatt

+++++

Elektr o‘tkazgich deb …… aytiladi:
====
#erkin elektronlari mavjud bo‘lgan moddalarga
====
qattiq kristall panjarali moddalarga
====
neytral moddalarga
====
erkin fotonlari bo‘lgan moddalarga

+++++

O‘zgarmas elektr toki yo‘nalishi quyidagicha belgilanadi:
====
#musbat qutbdan manfiy qutbga
====
neytral zarralarning harakati orqali
====
manfiy zaryadlangan zarralarning harakati orqali
====
manfiy zaryadlangan fotonlarning harakati orqali

+++++

Tok kuchiga ta’rif bering.
====
#vaqt birligi ichida  o‘tkazgichning ko‘ndalang kesimidan oqib o‘tgan elektr ------miqdoriga aytiladi
====
protonlar va neytronlar miqdoriga aytiladi
====
atomdagi protonlar miqdoriga aytiladi-
====
adrodagi elektronlar miqdoriga aytiladi

+++++

O‘zgarmas tok bu …
====
#tebranishlar chastotasi f=0 bo‘lgan elektr toki
====
tebranishlar chastotasi f>0 bo‘lgan elektr toki
====
tebranishlar chastotasi f
+++++

Tok kuchini o‘lchash uchun ampermetr zanjirga quyidagicha ulanadi:
====
#tok kuchi o‘lchanadigan elementga ketma-ket
====
tok kuchi o‘lchanadigan elementga parallel
====
tok manbaiga parallel
====
aralash

+++++

Kuchlanishni o‘lchashda voltmeter zanjirga qanday ulanadi:
====
#kuchlanishni o‘lchash kerak bo‘lgan elektr energiya qabul qiluvchisiga parallel
====
tok manbaiga ketma-ket
====
zanjirdagi iste’molchiga ketma-ket
====
aralash

+++++

To‘g‘ri javobni ko‘rsating.
====
#1 Om=1 V/1 A -1 Om=1 V·1 A
====
1 Om=1 A/1 V
====
1 Om=2 A/1 V

+++++

Elektr energiyasi elektr uzatuvchi liniyalar orqali yuqori kuchlanish yordamida uzatiladi, chunki …
====
#energiyani uzatishda sim (o‘tkazgich) larda yo‘qotish kamroq bo‘lishi uchun
====
yuqori kuchlanish nisbatan xavfsiz
====
yuqori elektr uzatish liniyalarini qurish nisbatan osonroq
====
yuqori kuchlanishdan foydalanish qulay

+++++

Signal chastotasini o‘lchaydigan asbob:
====
#chastotamer
====
ampermetr
====
vattmetr
====
voltmetr

+++++

Elektr energiya iste’molchisi:
====
#elektrodvigatellar
====
generatorlar
====
transformatorlar
====
elektr energiyani hisoblagichlar

+++++

Elektr signallarining fazasini o‘lchaydigan asbob bu ...
====
#fazometr
====
vattmetr
====
chastotamer
====
ampermetr

+++++

Quvvat … da o‘lchanadi.
====
#Vatt
====
Volt
====
Amper
====
Om

+++++

Elektromagnit – bu … 
====
#po‘lat o‘zakli induktiv g‘altak
====
spiral ko‘rinishli o‘tkazgich
====
alyuminiy o‘tkazgichli g‘altak
====
spiralli g‘altak

+++++

Elektr tokining elektromagnit harakati quyidagi qurilmalarda ishlatiladi:
====
#relelarda
====
batareyalarda
====
stol lanpasida
====
akkumulyatorda

+++++

Manfiy ion bu – … 
====
#bir yoki bir nechta elektronlarni olgan atom
====
qo‘shimcha ionlarni olgan atom
====
qo‘shimcha neytronlarni olgan atom
====
bitta yoki bir nechta elektronlarni yo‘qotgan atom

+++++

Musbat ion bu – …
====
#bir yoki bir nechta elektronlarni yo‘qotgan atom
====
qo‘shimcha ionlarni olgan atom
====
qo‘shimcha neytronlarni olgan atom
====
bitta yoki bir nechta elektronlarni olgan atom

+++++

Elektr zaryadi bir joydan boshqasiga ko‘chirish … natijasida sodir bo‘ladi.
====
#zaryadlangan zarrachalarning tartibli harakati
====
o‘tkazgichning qizishi
====
zaryadlangan zarralarning tartibsiz harakati
====
zaryadlangan zarralarning xaotik harakati

+++++

Zanjirda tok kuchini o’lchash uchun … ishlatiladi.
====
#ampermetr
====
voltmatr
====
reostat
====
galvanometr

+++++

Qaysi javobda birlamchi elektr manbalar keltirilgan?
====
#galvanik elementlar, batareyalar, akkumulyatorlar
====
o‘g‘rilagichlar
====
impuls ta’minlovchi manbalar
====
kuchlanish stabilizatorlari

+++++

Qaysi holda resistor, kondensator va induktivlikli zanjirlarda faqat qarshilik mavjud?
====
#induktiv va kondensator qarshiliklari o‘zaro teng
====
qolgan elementlar bilan taqqoslaganda resistor qarshiligi minimal
====
resistor qarshiligi induktivlik va kondensator qarshiligidan ko‘p marta katta
====
induktivlik va sig‘imdagi qarshiliklar o‘zaro teng emas

+++++

Bitta rezistorga ikkinchisi ketma-ket ulanganda, umumiy qarshilik …
====
#ortadi
====
o‘zgarmaydi
====
kamayadi
====
0 ga teng bo‘ladi

+++++

O‘tkazgichlarga tegishli bo‘lmagan moddani ko‘rsating.
====
#kremniy
====
alyuminiy
====
oltin
====
mis

+++++

Elektr o‘tkazuvchanligi bo‘yicha o‘tkazgich va dielektriklar orasidagi o‘rinni egallovchi modda bu …
====
#yarim o‘tkazgichlar
====
paramagnetiklar
====
izolyatorlar
====
metallar

+++++

Tok o‘tayotganda o‘tkazgichda ajratiladigan issiqlik miqdori nimaga bog‘liq?
====
#tok, o‘tkazgich qarshiligiga va o‘tish vaqtiga
====
o‘tkazgich parametrlariga
====
xona haroratiga
====
sig‘imiga

+++++

Elektromagnit jarayonlar elektr toki, kuchlanish va elektr yurituvchi kuch tushunchalari orqali ifodalanadigan, elektr tokining o‘tishi uchun yo‘l hosil qiladigan qurilma va obyektlar yig‘indisi qanday nomlanadi?
====
#elektr zanjir
====
EYUK manbai
====
tugun
====
elektr zanjir shaxobchasi

+++++

Zanjirdagi kuchlanishni qaysi asbob o‘lchaydi va bu asbob qanday ulanadi?
====
#Voltmetr, parallel
====
Ampermetr, ketma-ket
====
Ommetr, ketma-ket
====
Vattmetr, parallel

+++++

Dielektrik bilan ajratilgan ikkita o‘tkazgichdan tashkil topgan qurilma qanday nomlanadi?
====
#kondensator
====
rezistor
====
induktiv g‘altak
====
o‘lchov transformatori

+++++

O‘zgaruvchan kattalik o‘zining o‘zgarishlarini to‘liq amalga oshiradigan vaqt qanday ataladi?
====
#davr
====
chastota
====
amplituda
====
burchak chastotasi

+++++

n ta element parallel ulanganda kuchlanish (U) quyidagicha … hisoblanadi.
====
#U=U1=U2=…=Un
====
U=1/U1 + 1/U2 + … +1/Un
====
U=U1+U2+…+Un
====
1/U=U1 + U2 +…+Un

+++++

Germaniy elementining taqiqlangan  zonasi ... ga  teng.  
====
#0,67eV
====
1,43eV
====
>3eV
====
1,12eV

+++++

Ideal kuchlanish manbasi  – Bu shunday elektr  manbasiki ... .
====
#chiqishdagi kuchlanish, undagi  tok miqdorining o‘zgarishiga  bog‘liq emas
====
undagi tok, kuchlanish  o‘zgarishiga  bog‘liq emas
====
undagi tokning  qiymati, u yerdagi  ichki  o‘tkazuvchanlik bilan  xarakterlanadi
====
undagi  tok qiymati,  u yerdagi elektr yurituvchi kuch va ichki qarshilik bilan xarakterlanadi

+++++

Burchak chastotaga  ta’rif bering.
====
#2π oralig‘idagi siklik tebranishlar soniga aytiladi
====
π oralig‘idagi siklik tebranishlar soniga aytiladi
====
π /2 oralig‘idagi siklik tebranishlar soniga aytiladi
====
1 sekund  oralig‘idagi siklik tebranishlar soniga aytiladi

+++++

Zanjirdagi shaxobchalarning tutashgan nuqtasi  ... deb ataladi?
====
#tugun
====
shaxobcha
====
zanjir
====
kontur

+++++

Bir xil tok  oqib o‘tadigan  zanjirning qismi qanday nomlanadi?
====
#shaxobcha
====
tugun
====
kontur
====
mustaqil kontur

+++++

Zanjirning bir qismi uchun, Om qonuni formulasini to‘g‘ri yozilgan variantni ko‘rsating:
====
#I=U/R
====
 I=UxR+m
====
F=mv2
====
U=mI2

+++++

Tebranishning to‘liq fazasi ko‘rsatilgan kattalik ... .
====
#(wt+ф) 
====
ф
==== -(w+ф)
====
(t+ф)
 ====
Zanjirning qarshiligi o‘zgarmas bo‘lgan qismida, tok  miqdori  ortsa, u holda  kuchlanish … .
====
#ortadi
====
o‘zgarmaydi
====
nolga teng bo‘ladi    
====
kamayadi

+++++

Kondensator qutblarida kuchlanish miqdori  ortsa, uning plastinalaridagi sig‘im va zaryad  miqdori qanday o‘zgaradi?
====
#Sig‘im o‘zgarmaydi, zaryad esa ortadi;
====
Sig‘im va zaryad bir xilda  ortadi;
====
Sig‘im o‘zgarmaydi, zaryad esa kamayadi;
====
Sig‘im kamayadi, zaryad  ortadi;   

+++++

Zanjirdagi barcha  toklarni topishda, Kirxgoffning nirinchi qonunini  qo‘llagan xolda, sxemada qancha … bo‘lsa shuncha  tenglama  tuzish  lozim.   
====
#shaxobcha
====
tugun
====
qarshilik (rezistor)
====
kontur

+++++

Induktivlik elementi L da …
====
#kuchlanish uL(t) faza bo‘yicha  tokga iL(t) nisbatan π/2 rad ga ilgarilaydi
====
kuchlanish uL(t) va tok iL(t) teskari  fazada  bo‘ladi
====
kuchlanish uL(t) faza bo‘yicha  tokga iL(t) nisbatan π/2 rad ortda qoladi
====
kuchlanish uL(t) faza bo‘yicha  tok iL(t) bilan  ustma-ust  tushadi

+++++

Aktiv qarshilik R da …
====
#kuchlanish uL(t) faza bo‘yicha  tok iL(t) bilan  ustma-ust  tushadi
====
kuchlanish uL(t) faza bo‘yicha  tokga iL(t) nisbatan π/2 rad ga ilgarilaydi
====
kuchlanish uL(t) va tok iL(t) teskari  fazada  bo‘ladi
====
kuchlanish uL(t) faza bo‘yicha  tokga iL(t) nisbatan  π/2 rad  ortda qoladi

+++++

Kondensator C da…
====
#kuchlanish uL(t) faza bo‘yicha  tokga iL(t) nisbatan  π/2 rad  ortda qoladi
====
kuchlanish uL(t) faza bo‘yicha  tok iL(t) bilan  ustma-ust  tushadi
====
kuchlanish uL(t) faza bo‘yicha  tokga iL(t) nisbatan  π/2 rad ga ilgarilaydi
====
kuchlanish uL(t) va tok iL(t) teskari  fazada  bo‘ladi

+++++

Quyida keltirilgan manbalarning qaysi biri o‘zgarmas tok manbai hisoblanadi?
====
#akkumulyatorlar
====
220 V li sanoat tarmog‘i
====
380 V li uch fazali sanoat tarmog‘i
====
o‘zgarmas tokda ishlovchi elektro-dvigatellar

+++++

Quvvat balansi sharti ...
====
#Manbadan chiqayotgan  energiya miqdori , yuklamada  hosil  bo‘layotgan  energiya miqdoriga  teng.   
====
Manbadan  chiqayotgan  energiya miqdori, yuklamada  hosil  bo‘layotgan  energiya miqdoridan katta
====
Manbadan  chiqayotgan  energiya miqdori, yuklamada  hosil  bo‘layotgan  energiya miqdoridan kichik
====
Manbadan  chiqayotgan  energiya miqdori, yuklamada  hosil  bo‘layotgan  energiya miqdoriga  teng  emas

+++++

Tok rezonansi vaqtida quvvat uchun qaysi tenglama o‘rinli
====
#Q=0
====
Q=S
====
P=0
====
Q=P

+++++

Aktiv o‘tkazuvchanlik qanday aniqlanadi?
====
#G=1/R, aktiv qarshilikka teskari nisbat
====
Q=I2R, tokning kvadratini qarshilikka ko‘paytmasi
====
P=UI, kuchlanishni tokka ko‘paytmasi
====
I=U/R, kuchlanishni qarshilikka nisbati

+++++

Quyida keltirilgan manbalarning qaysi biri o‘zgaruvchan tok manbai?
====
#~220 V li sanoat tarmog‘i
====
akkumulyator
====
galvanik element
====
o‘zgaruvchan tokda ishlovchi elektrodvigatel

+++++

Zanjirda EYUK E=12 V va R1=2 Om, R2=1 Om qarshiliklar ketma-ket ulangan. Zanjirdagi tokni qiymatini toping.
====
#4 A
====
1 A
====
6 A
====
9 A

+++++

Zanjirda EYUK E=16 V va R1=6 Om, R2=2 Om qarshiliklar ketma-ket ulangan. Zanjirdagi tokni qiymatini toping.
====
#2 A
====
1 A
====
6 A
====
9 A

+++++

Umumiy emitter ulanish  (UE) sxemasida  chiqish xarakteristikasi  – bu:
====
#Baza  tokini  o‘zgarmas miqdorida, kollektor tokini, kollektor emitter kuchlanishiga bog‘liqligidir.
====
Baza  tokini  o‘zgarmas miqdorida, kollektor tokini, baza  emitter kuchlanishiga bog‘liqligidir.  
====
Baza  tokini  o‘zgarmas miqdorida, kollektor tokini, kollektor baza kuchlanishiga bog‘liqligidir.
====
Emitter tokini  o‘zgarmas miqdorida, kollektor tokini, kollektor baza kuchlanishiga bog‘liqligidir.  

+++++

Har birining induktivligi L=9 Hn ga teng uchta induktivlik g‘altaklari o‘zaro parallel ulangan umumiy induktivlikni toping.
====
#3 Hn
====
100 Hn
====
50 Hn
====
45 Hn

+++++

Har birining induktivligi L=36 Hn ga teng to‘rta induktivlik g‘altaklari o‘zaro parallel ulangan umumiy induktivlikni toping.
====
#9 Hn
====
98 Hn
====
50 Hn
====
45 Hn

+++++

Bipolyar  tranzistor  p-n o‘tish va elektrodlar soni nechta?
====
#ikkita bir biriga qarama qarshi ulangan  p-n  o‘tish  va uchta elektrod
====
ikkita bir biriga to‘g‘ri ulangan  p-n  o‘tish  va ikkita elektrod
====
uchta bir biriga qarama qarshi ulangan  p-n  o‘tish  va uchta elektrod
====
ikkita bir biriga qarama qarshi ulangan  p-n  o‘tish  va to‘rtta elektrod

+++++

Bipolyar  tranzistorning qaysi  ish rejimida (EO‘)  emitter o‘tish  to‘g‘ri, kollektor o‘tish (KO‘) teskari siljitilgan (yo‘naltirilgan) bo‘ladi? 
====
#aktiv rejimida
====
invers rejimda
====
berk rejimda
====
to‘yinish rejimida

+++++

Bipolyar tranzistorning qaysi  ish rejimida (EO‘)  emitter o‘tish  hamda kollektor o‘tish (KO‘) to‘g‘ri, siljitilgan (yo‘naltirilgan) bo‘ladi? 
====
#to‘yinish rejimi
====
aktiv rejimida
====
invers rejimda
====
berk rejimda

+++++

Bipolyar tranzistorning qaysi  ish rejimida (EO‘)  emitter o‘tish  xamda  kollektor o‘tish teskari siljitilgan (yo‘naltirilgan) bo‘ladi? 
====
#berk
====
invers
====
aktiv
====
to‘yinish

+++++

Bipolyar  tranzistorning qaysi  ish rejimida (EO‘)  emitter o‘tish  teskari, kollektor o‘tish to‘g‘ri siljitilgan (yo‘naltirilgan) bo‘ladi? 
====
#invers
====
aktiv
====
to‘yinish
====
berk

+++++

Dielektriklarning taqiqlangan  zonasi ... ga  teng.
====
#>3eV
====
1,12eV
====
0,67eV
====
1,43eV

+++++

Real kuchlani  manbai bu  – ...
====
#ichki qarshilikka ega bo‘lgan elektr yurituvchi kuch
====
ichki qarshilikka ega bo‘lmagan elektr yurituvchi kuch
====
tok, kuchlanishga  bog‘liq bo‘lmagan  elektr manbai
====
kuchlanishi  chiqish tokiga bog‘liq bo‘lmagan elektr manbai

+++++

Ideal tok  manbai  bu …
====
#chiqishdagi elektr toki kuchlanishga  bog‘liq bo‘lmagan  manba
====
chiqishdagi elektr toki kuchlanishga  bog‘liq bo‘lgan  manba
====
chiqishdagi elektr kuchlanishi u erdagi tokga  bog‘liq bo‘lmagan  manba
====
chiqishdagi elektr toki   u erdagi  qarshilikka  bog‘liq bo‘lgan  manba

+++++

Ketma ket tebranish  konturida  qanaqa  rezonans xosil bo‘ladi?  
====
#kuchlanish rezonansi
====
quvvat rezonansi
====
tok rezonansi
====
sig‘im va induktivlik rezonansi

+++++

Paralel tebranish konturida qanaqa  rezonans xosil bo‘ladi?
====
#Tok rezonansi
====
Quvvat balansi
====
Tugun potensiali rezonansi
====
Kuchlanish rezonansi

+++++

Shaxobchaga ta’rif bering:
====
#Bir nechta elementlar ulangan zanjirning  shunday qismiki  undan  bir xil tok oqib o‘tadi.
====
Zanjirning   berk  qismi
====
Zanjirdagi uchta  va  undan  ortiq elementlarning  tutashgan  nuqtasi
====
Ikkita va undan  ortiq  shaxobchalarning  ulangan  nuqtasi  

+++++

Tugun deb  nimaga aytiladi?
====
#uchta va undan  ortiq  shaxobchalarning  tutashgan  nuqtasi.  
====
elektr manba  va  yuklamani  ulangan  joyi
====
ikki va undan  ortiq konturlarni  ulangan  joyi
====
ketma-ket ulangan qarshiliklar  to‘plami

+++++

Paralel ulangan deb ... ga aytiladi.
====
#bir juft tugunga  ulangan shaxobchalar
====
bitta tugunga ulangan  shaxobchalar   
====
har xil  tugunga ulangan  shaxobchalar    
====
uchta  va undan ortiq shaxobchalarning ulangan  nuqtasi   

+++++

Kirxgoffning birinchi qonuniga asosan:
====
#tugunga kiruvchi toklar musbat ishorali.
====
tugunga  kiruvchi  toklar   manfiy  ishorali
====
tugundan  chiquvchi  toklar   musbat ishorali
====
tugunga kiruvchi va chiquvchi toklarning ishoralari inobatga olinmaydi

+++++

Har birining induktivligi L=5 Hn ga teng uchta induktivlik g‘altaklari o‘zaro ketma-ket ulangan ummumiy induktivlikni toping.
====
#15 Hn
====
100 Hn
====
50 Hn
====
45 Hn

+++++

 “Inpendans” so‘zining ma’nosi bu … 
====
#zanjirning ikki tugun orasidagi kompleks qarshiligi
====
zanjirning berk qismi uchun tok qiymati
====
zanjirda kuchlanishni keskin ortib ketishi
====
zanjirda kuchlanishni keskin kamayib ketishi

+++++

Tugunga 4 ta  shaxobcha ulangan, agar kiruvchi toklar qiymati I1=6 A, I2=7 A, I3=5 A bo‘lsa, I4 chiquvchi tok qiymati qanchaga  teng?
====
#-18A
====
10A
====
0 A
====
20 A

+++++

Tugunga 4 ta  shaxobcha ulangan, agar kiruvchi toklar qiymati I1=0.5 A, I2=3.5 A, I3=4 A  bo‘lsa, I4 chiquvchi tok qiymati qanchaga  teng?
====
#-8A
====
13A
====
15 A
====
20 A

+++++

Kontur  manbasining  kuchlanishi    U=20 V, ketma ket ulangan  tebranish konurida, rezonans  paytida, qarshilik: R=10 Om , L=100 mGn va C=100 mkF      bo‘lganda  tok  miqdori  qanchaga  teng?
====
#2A
====
1A
====
2,5A
====
0,5A

+++++

Aktiv qarshilik  R=10 Om, kondensatorning sig‘imi  C=100 mkF  va induktivlik galtagi  L=100 mGn   ketma ket  ulangan. Zanjirda kuchlanish rezonansi bo‘lganda, zanjirning to‘liq qarshiligini  Z toping.  
====
#Z=10 Om
====
Z=200 Om
====
Z=100 Om
====
Z=210 Om

+++++

Aktiv qarshilik  R=5 Om, kondensatorning sig‘imi  C=100 mkF  va induktivlik galtagi  L=100 mGn   ketma ket  ulangan. Zanjirda kuchlanish rezonansi bo‘lganda, zanjirning to‘liq qarshiligini  Z toping.  
====
#Z=5 Om
====
Z=202 Om
====
Z=101 Om
====
Z=210 Om

+++++

Beshta  rezistor  R1=100 Om, R2=10 Om, R3=20 Om, R4=500 Om, R5=30 Om o‘zaro paralel ulangan. Qaysi  rezistordan eng katta  tok oqib utadi?
====
#R2 dan
====
 R4 dan
====
hammasidan bir xil
====
R1 va R5 dan

+++++

Beshta  rezistor R1=120 Om, R2=700 Om, R3=20 Om, R4=500 Om, R5=350 Om o‘zaro paralel ulangan. Qaysi  rezistordan eng kam  tok oqib utadi?
====
#R2 dan
====
 R4  dan
====
hammasidan bir xil
====
 R1 va R5 dan

+++++

Sirusoidal kuchlanishning ta’sir etuvchi qiymati 100 V bo‘lsa, uning amplituda  qiymati  qancha?
====
#141V
====
120V
====
220V
====
380V

+++++

Sinusoidal kuchlanishning amplitudasi 100 V  bo‘lsa, uning ta’sir etuvchi  qiymati  qancha?
====
#70,7V
====
120V
====
220V
====
141V
        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
