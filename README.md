# React.js'e Giriş

React.js Facebook ve Instagram tarafından geliştirilmiş bir kullanıcı arayüzü
kütüphanesidir. Kullanıcı arayüzü geliştirmede MVC, yani model-view-controller
(model-görüntü-kontrolcü) tasarım deseni çok fazla kullanılır. React'in temel
görevi buradaki View, yani görüntü kısmını düzenlemek olarak düşünülebilir; ama
aslında sadece bir görüntü katmanından çok daha fazlasıdır.

## Tarihçe

React'in tarihçesinden hızlıca bahsedecek olursak, Facebook Instagram'ı
bünyesine kattığında Instagram'ın bir web sitesi yoktu, sadece mobil
uygulamaları vardı. Bir web sitesi geliştirmek isteyen Instagram mühendisleri
Facebook'un yorumlar, reklamlar gibi bazı bileşenlerinde kullandığı dahili
kütüphaneyi kullanmak istedi. Yapılan çalışma sonucu kütüphanenin Facebook kod
tabanındaki diğer bağımlılıkları kaldırıldı ve kütüphane 2013 Mayıs'ında
JSConf'ta açık kaynak olarak dünyaya tanıtıldı.

React.js'e ilk başta oldukça şüpheyle yaklaşıldı, hatta tanıtıldığı konferansta
Facebook'un piyasadaki bütün bilinen doğruları sorguladığı, JS ile HTML'i çorba
yaptığı şeklinde alay konusu bile oldu. Ancak sonraki dönemde bu kütüphanenin
karmaşık sistemleri basitleştirdiği ve hızlandırdığı birçok firma tarafından
fark edildi ve Netflix, Airbnb, Khan Academy gibi pek çok firma arayüzlerinde
React.js'e geçti.

## Büyük Uygulamalarda Arayüz Geliştirmenin Zorlukları

React'in temel hedefini şu şekilde özetleyebiliriz: Verinin zaman içerisinde
değiştiği büyük uygulamaları basit ve hızlı bir şekilde geliştirmek.

Çoğu durumda arayüz geliştirmek oldukça zordur, peki buradaki asıl zorluk nedir?
Örneğin sunucu tabanlı bir web sistemi geliştirdiğimizi
düşünelim. Veritabanından verileri çektik, daha sonra bir taslak, yani template
aşamasından geçirip HTML çıktısını oluşturduk. Çoğu uygulamada, örneğin PHP'de,
Django'da ya da Rails'te bu oldukça kolay bir işlemdir. Bu işlemi veriyi alan ve
sonuç olarak HTML üreten bir fonksiyon olarak soyutlayabiliriz.

Halbuki işler istemci tabanlı, yani clientside bir arayüz geliştirmeye
geldiğinde oldukça zorlaşır. Buradaki zorluğun sebebi kullanılan dil olan
JavaScript midir?

Aslında birkaç yıl öncesine kadar çoğu kişinin kanısı bu yöndeydi. Bilindiği
gibi JavaScript dili Brendan Eich tarafından yalnızca 10 gün içinde, deyim
yerindeyse yangından mal kaçırırcasına tasarlanmış bir programlama dili. Bu
nedenle dilde hala giderilmeye çalışılan bazı hatalar ve gariplikler var.

Ancak Douglas Crockford'un JavaScript the Good Parts kitabında anlattığı üzere
bu 10 gün içerisinde Brendan Eich, görüntü olarak C'ye benzese de altında bir
Lisp yatan, çok esnek, fonksiyonel bir dil yaratmıştı. Zaten dildeki hatalar da
CoffeeScript, ES6 gibi diller aracılığıyla ve underscore gibi fonksiyonel
kütüphaneler sayesinde zaman içerisinde oldukça azaltıldı.

Peki arayüz geliştirmedeki ana zorluk dil değilse nedir? Büyük uygulamaları
incelediğimizde ve sunucuda oluşturulan arayüzleri tarayıcıdaki arayüzlerle
karşılaştırdığımızda asıl zorluğun zaman içerisinde değişen veri yönetimi
olduğunu görürüz. Sunucu taraflı bir uygulamayı düşünelim, veriyi veritabanından
çektik, taslağa gönderdik. Bu esnada veriyi aslında değişmeyen bir yapı olarak
düşünebiliriz.

Ancak istemci tarafında işler bu şekilde ilerlemez. Diyelim kullanıcı tarayıcıyı
açtı, uygulamayı başlattı; işte bu noktadan sonra uygulamadaki veri sürekli
değişim halindedir ve uygulamadaki görüntü ile verinin senkronizasyon sorunu
başlar. Hele aynı veri görüntünün birden fazla yerinde gösteriliyorsa işler daha
da karmaşıklaşır.

Örneğin bir chat uygulaması düşünelim. Şu an çevrimici olan arkadaşlarımızı ve
toplam kaç arkadaşımızın çevrimiçi olduğunu göstersin. Diyelim ki bir
arkadaşımız daha çevrimiçi hale geldi. Burada herhangi bir arayüz kütüphanesi
kullanmıyorsak yapmamız gereken iki değişiklik var: Öncelikle yeni gelen
arkadaşımızın ismini listeye eklemeli, daha sonra da tepedeki arkadaş sayısını
bir artırmalıyız. Yani bir anlamda görüntüde kısmi bir değişiklik, bir yama
yapmalıyız. Bu basit bir örnek gibi görünse de arayüz geliştirmedeki sorunların
birçoğu işte bu veri ve görüntü arasındaki köşe kapmaca yüzünden yaşanmakta;
veri değiştiğinde programcı görüntüdeki bir veri değiştirmeyi unutmakta.

## React'in Temel Felsefesi: Görüntüyü her seferinde yeniden oluşturmak

İşte bu noktada React'in arayüz oluşturmadaki birinci ve temel felsefesi devreye
giriyor: Verideki her değişimde görüntüyü yamamak yerine sil baştan
oluşturalım. Yani görüntü yapacağımız değişiklikleri düşünmek yerine sadece
veride bir değişiklik yapalım, görüntü sanki sayfayı yeniden yüklemişiz gibi
sıfırdan oluşturulsun. Bu şekilde veri ve görüntü arasında hiçbir zaman bir
anlaşmazlık olmasın.

Tabii kulağa çok hoş geliyor, ama bu konuda kafanızda bazı soru işaretleri olmuş
olabilir: Diyelim 100 kişilik bir listemiz var, veriye bir kişi daha ekledik,
101 kişilik yeni bir liste oluşturmamız gerekmekte. Bunu naif bir şekilde
yaparsak, elimizde halihazırda bulunan 100 kişilik listeyi çöpe atacağız ve
sıfırdan 101 kişilik bir liste oluşturacağız. Bu oldukça yavaş olmaz mı?

React'in kütüphane olarak devreye girdiği yer tam da bu nokta. React, kullanıcı
olarak sizin sadece veriye ve o verinin nasıl görüntüleneceğine odaklanmanızı
sağlarken arkaplanda görüntüdeki değişimin en etkin biçimde yapılmasını
sağlamakta. Yani 101 kişilik yeni listeyi oluştururken sizin yerinize görüntüde
yapılması değişiklikleri hesaplamakta ve sadece bu değişiklikleri görüntüye
uygulamakta. İşte React'in bunu yaparken kullandığı yönteme de sanal DOM
(virtual DOM) diyoruz. React görüntü elemanlarını sanal DOM adı verilen bir veri
yapısında tutuyor ve değişiklik olduğunda bu veri yapısını güncelleyerek
görüntüde toplu değişiklikler yapiyor. Bu yöntemle React verideki değişiklikler
sonucunda optimum olarak hangi HTML elemanlarının eklenip çıkarılacağına kendisi
karar veriyor.

Dolayısıyla React'in birinci temel kuralını şu şekilde özetleyebiliriz:
Kullanıcı temel olarak arayüzün arkasındaki veri yapısına ve değişikliklerine
odaklanmalı ve bu verinin nasıl görüntüleneceğini yalnızca bir kez tanımlamalı.

## React'in İkinci İlkesi: Bileşenler

Şimdi gelelim React'in ikinci temel ilkesine. React'e göre arayüz geliştirirken
temel hedefimiz aslında bileşen oluşturmak olmalı; yani elimizdeki arayüzü
bileşenlere ayırmalı ve bileşenler cinsinden analiz etmeliyiz. Elimizde
halihazırda bir HTML taslağı olduğu düşünelim, örneğin bir adres defteri. Bunu
gerçekleştirmek için bunu küçük bileşenlere ayıralım. Örneğin tepedeki bileşen
bir arama bileşeni, aşağıdaki her bir harfe ait kişiler bir `Sayfa` bileşeni,
her bir adres satırı ise birer `Adres` bileşeni olarak düşünülebilir.

İşte bu yaptığımız temelde bir soyutlama işlemi, elimizdeki küçük Lego
bloklarından daha büyük Lego blokları yapıyoruz ve en nihayetinde en büyük Lego
bloku olan uygulamamızı kuruyoruz.

Bunu programlamada birden fazla cümleden fonksiyon oluşturmaya
benzetebiliriz. Bu fonksiyonları kullanan yeni üst fonksiyonlar oluşturduğumuz
gibi bileşenleri kullanan üst bileşenler oluşturabiliriz. Bu şekilde elimizde
yeniden kullanılabilir (reusable), birbiri içine geçebilen (composable), nasıl
kullanılacağı tanımlanmış küçük ve hatasız birimler oluşacak. React
terminolojisinde temelde kullanılan bu yapıya component, yani bileşen denmekte.

### Basit Bir Bileşen: MerhabaDunya

Bileşenlerin nasıl oluşturulduğuna ve kullanıldığına bir örnek verelim. Bir
React component'i oluşturmak için `React.createClass` metodunu bir nesne
(object) ile çağırıyoruz. Bileşenin nasıl görüneceğini de bu nesnenin `render`
metodunda tanımlıyoruz. Mesela, `MerhabaDunya` adında bir bileşen tanımlayalım.

```js
var MerhabaDunya = React.createClass({
  render: function () {
    return <div>Merhaba Dunya</div>;
  }
})
```

Burada React aslında sadece JavaScript dilini kullanıyor, herhangi bir taslak
dili değil bu. Normal JavaScript'ten tek farkı JSX adında HTML sözdizimine
benzeyen yapıları kullanmamıza izin vermesi. JSX isteğe bağlı kullanılan bir
araç, tek yaptığı bu sözdizimi alıp bu etiketleri JavaScript fonksiyonlarına
çevirmek. Yani `<div>Merhaba Dünya</div>` deyimini `React.createElement("div", null, "Merhaba Dünya")`
fonksiyonuna dönüştürmekte.

Bu bileşeni tanımladıktan sonra sayfamızda göstermek için sayfada halihazırda
bulunan boş bir elemana monte etmemiz gerekmekte. Bunun için de `React.render`
komutunu kullanmaktayız, örneğin bu bileşeni `body` elemanına monte etmek için
`React.render(<MerhabaDunya/>, document.body)` kullanıyoruz. Monte edeceğimiz
eleman `body` yerine sayfada bulunan başka bir HTML elemanı da olabilirdi.

Gördüğünüz gibi HTML'de tanımlı olan `div` bileşenini kullanarak `MerhabaDunya`
adında yeni bir bileşen oluşturduk ve artık bunu sanki HTML'de bu şekilde bir
bileşen varmış gibi kullanabilmekteyiz.

### Karmaşık Bir Bileşen: Selamlama

Şimdi bu işlemi bir adım ileri götürelim, bu basit bileşeni kullanarak daha
büyük bir bileşen oluşturalım. Örneğin, iki kere "Merhaba Dünya" diyecek bir
`Selamlama` bileşeni oluşturalım. `Selamlama` adlı bileşeni oluşturmak için
yapmamız gereken `React.createClass` içerisine `MerhabaDunya` bileşenini iki kez
kullanan bir `render` metodu yazmak. Daha sonra `Selamlama` bileşenini yine
`React.render` ile `body` elemanına monte edebiliriz.

```js
var Selamlama = React.createClass({
  render: function () {
    return (
      <div>
        <MerhabaDunya/>
        <MerhabaDunya/>
      </div>)
   }
})
```

Gördüğünüz gibi artık `MerhabaDunya` bileşenini başka bir bileşen içerisinde
yeniden kullanabiliyoruz. Şimdi bunu bir adım ileri götürelim, diyelim ki
`MerhabaDunya` bileşeni parametre olarak selamlayacağı kişinin ismini bir
parametre olarak alsın ve bu kişinin ismini görüntülesin.

Fonksiyonların giriş parametrelerine benzer bir şekilde React bileşenleri de
`props` adında bir nesne içerisinde parametre kümesi alabilir ve bu
parametrelere `props` üzerinden `render` metodunda erişebilir. `MerhabaDunya`
bileşenini bu şekilde yeniden yazalım:

```js
var MerhabaDunya = React.createClass({
  render: function () {
    return <div>Merhaba {this.props.isim}</div>
  }
})
```

Buradaki { } (süslü parantezler) yine React'in JSX aracıyla JavaScript'e yaptığı
bir ekleme, alt tarafta aslında parantezin icindekiler fonksiyon parametresine
dönüşmekte. Yani `<div>Merhaba {this.props.isim}</div>` yerine `React.createElement("div", null,
"Merhaba", this.props.isim)` de yazabilirdik.

Şimdi de `Selamlama` bileşenimizi `MerhabaDunya` bileşenine isim parametresini aktaracak şekilde yeniden yazalım:

```js
var Selamlama = React.createClass({
    render: function () {
      return <div>
         <MerhabaDunya isim="Üstün"/>
         <MerhabaDunya isim="Özgür"/>
       </div>
     }
})
```

İşte bu noktada artık `MerhabaDunya` adında yeniden kullanılabilir ve arayüzü,
yani giriş degişkenleri tam olarak belirlenmiş bir çocuk bileşenimiz oldu.

### Veri değişimi

React'in temel felsefesinden bahsederken React'in asıl öneminin verinin
değiştiği uygulamaları yönetmek olduğunu söylemiştik. Şu ana kadar verdiğimiz
örneklerde veri hep sabit olduğu için bunu henüz görmedik. Verideki değişimi
örneklemek için bir Sayaç bileşeni düşünelim.

Sayaç bileşenindeki değişkenleri düşünecek olursak tek değişkenimiz sayaç adında
bir sayı. React'te bileşen ait değişkenler `state` adında bir nesnede
toplanmakta. Yani nasıl ki `props` adında tepeden çocuk bileşene gönderilen
parametrelerin toplandığı bir nesne var, çocuk bileşendeki değişimleri izlemek
için de `state` adında bir nesne bulunmakta. Bu `state`'in ilk değerini vermek
için yazmamız gereken bileşen metodu ise `getInitialState`. Bunu yaptıktan sonra
artık bu state değişkenine `render` içerisinde erişebiliyoruz.

```js
var Sayac = React.createClass({
    getInitialState: function () {
      return {sayac: 0};
    },

    render: function () {
         <div>Sayaca {this.state.sayac} kez tıkladınız</div>
    }
})
```

Şimdi sayacı artıracak bir de düğme ekleyelim.

```js
var Sayac = React.createClass({
  getInitialState: function () {
    return {sayaç: 0};
  },

  render: function () {
    return (
      <div>
        Sayaca {this.state.sayac} kez tıkladınız
        <button>Sayaç</button>
      </div>);
    }
})
```

Amacımız bu düğmeye her tıkladığımızda sayacı bir artırmak. Bunun için sayaç'a
bir `onClick` handler fonksiyon eklememiz ve bu fonksiyonda `state`'teki sayacı
bir artırmamız gerekmekte.

```js
var Sayac = React.createClass({

    getInitialState: function () {
      return {sayac: 0};
    },

    artir: function () {
        // Buraya ne yazmalıyız?
    },

    render: function () {
      return (
        <div>
          Sayaca {this.state.sayac} kez tıkladınız
          <button onClick={this.artir}>Sayaç</button>
        </div>;
    }
})
```

İşte burada React'in `state`'e diğer birçok kütüphaneye göre farklı bakış açısı
devreye giriyor. React'te yapacağınız her veri değişimini mutlaka `setState`
denilen bir metod üzerinden yapmanız gerekiyor, bu şekilde React sistemde bir
şeylerin değiştiğini ve `render` metodunu yeniden çalıştırması gerektiğini
anlıyor.

```js
var Sayac = React.createClass({
  getInitialState: function () {
    return {sayac: 0};
  },

  artir: function () {
    var suAnkiSayac = this.state.sayac;
    this.setState({sayac: suAnkiSayac + 1});
   },

  render: function () {
    return (
      <div>
        Sayaca {this.state.sayac} kez tıkladınız
        <button onClick={this.artir}>Sayaç</button>
      </div>)
    }
})
```

Örneğin AngularJS ile karşılaştıracak olursak AngularJS'te `setState` benzeri
bir şey yok, doğrudan değişkeni değiştiriyorsunuz, bu nedenle AngularJS'in
sayfada bir değişiklik olup olmadığını anlamak için sürekli digest loop
(sindirim döngüsü) adı verilen kod parçası gerekmekte. Bu döngü de büyük
uygulamalarda performans sorunlarına yol açıyor, sistemin neyi ne zaman
değiştireceğini anlamayı güçleştiriyor.

React'te ise `state` değişiklikleri `explicit`, yani açık seçik belirtilmiş
durumda. React'in felsefesine göre veri değişiklikleri bir uygulamadaki en
önemli zorluğu oluşturmakta, bu nedenle her türlü değişiklik mutlaka açık seçik
`setState` üzerinden yapılmakta.

Şimdi sayaç uygulamamızı biraz geliştirelim, örneğin 0'dan ileri doğru sayarken
aynı zamanda da 10'dan 0'a doğru bir gerisayım yapsın; ama bu iki sayı birbiri
ile tamamen bağlantılı olsun. Yan' sayaca 3 kez tıklarsak "3 kez tıkladınız, 7
kez daha tıklayın" desin. Şimdi burada kaç farklı değişken kullanmamız
gerekmekte? İşte React uygulamaları geliştirirken kendimize sürekli sormamız
gereken soru bu olacak: Veriyi nerede ve nasıl saklamalıyım?

Bu uygulamada iki farklı veri görüntülenecek olsa da aslında kaynakta sadece tek
sayaç değeri olduğunu görmeliyiz. Bu nedenle `state`'te sadece kaç kez
tıklandığı değerini tutmamız yeterli. İşte React uygulamalarında sıklıkla
düşünmemiz gereken önemli noktalardan biri de yine bu kaynak veri ve bu veriden
oluşturulan işlenmiş veri konusu. Burada tek bir kaynak veri var; ancak iki
farklı işlenmiş veri bulunmakta. `State`'te sadece kaynak veriyi tutmalı,
işlenmiş verileri `render` metodunda anlık olarak hesaplatmalıyız.

Bu değişiklikle Sayaç bileşenimizi yeniden yazalım:

```js
var Sayac = React.createClass({
  getInitialState: function () {
    return {sayac: 0};
  },

  artir: function () {
    var suAnkiSayac = this.state.sayac;
    this.setState({sayac: suAnkiSayac + 1});
  },

  render: function () {
    return (
    <div>
      Sayaca {this.state.sayac} kez tıkladınız.
      {10 - this.state.sayac} kez daha tıklamalısınız.
      <button onClick={this.artir}>Sayaç</button>
    </div>
    );
  }
})
```

Gördüğünüz gibi `render` metodumuz görüntümüzün uygulamanın her anında nasıl
görüneceği hakkında bize doğru bilgi veriyor. Yani render sadece ilk anda
oluşturulan, sonra elle yama yapılması gereken bir görüntü sağlamıyor, her zaman
doğru görüntü verecek bir sonuç veriyor.

### Ana Bileşen-Çocuk Bileşen Haberleşmesi

Son olarak da çocuk bileşenlerin ana bileşen ile nasıl haberleşeceğine göz
atalım. Burada da örneğin iki farklı sayacımız bulunsun, birine tıkladığımızda
hem kendi değerini artırsın, hem de diğer sayacın değerini bir azaltsın. Şimdi
burada düşünmemiz gereken konu şu: Veriyi, yani `state`'i nerede saklamalıyız?
Çocuk bileşenlerin kendilerine ait birer `state`'i mi olsun, yoksa ana bileşen her
iki `state`'i de kendisinde tutup bunları parametre olarak çocuklara mı aktarsın?

Bu soruya döneceğiz, ama bir de chat uygulamasına dönüp aynı soruyu orada
soralım: Burada arkadaş listesi hangi bileşende tutulmalı, ana bileşende mi,
çevrimiçi sayısını gösteren bileşende mi, yoksa arkadaşların isimlerinin
gösterildiği bileşende mi? Aynı veriye hem isim listesinde, hem de sayı
bileşeninde gereksinim duyulduğu için bu verinin en tepede tutulup aşağıya doğru
aktarılması en mantıklısı.

Sayaç uygulamasına dönelim, burada da verinin ana bileşende tutulup çocuklara
bir parametre olarak aktarılması daha mantıklı. Bunun bir güzel yanı da tüm
değişkenlerin veritabanı mantığına benzer şekilde merkezi bir yerde
toplanması. Bu sayede çocuk bileşenler verinin yönetimi konusuyla çok
ilgilenmemekte, basit veri gösterici bileşenlere dönüşmekte.

Peki bu durumda çocuk bileşenler verinin değişmesi gerektiğini ana bileşene
nasıl haber verecek? İşte bu noktada parametre olarak çocuklara aktarılan
callbackler ya da event handler'lar devreye giriyor. Çocuk bileşenlere ana
bileşenden önemli bir olay olduğunda çalıştırması gereken kod bir parametre
olarak aktarılıyor. Çocuk bileşen çalışacak kodun içeriğini bilmek zorunda
değil, hatta bilmemesi daha da iyi, tek yapması gereken tepedeki bileşenden
gelecek fonksiyonu çağırması gerektiği.

Dolayısıyla React'teki veri akışını şu şekilde özetleyebiliriz: Veri tepeden
aşağı doğru tek yönlü akar, aşağıdaki bileşenler değişiklikleri tepeye geri
arama (callback) fonksiyonları ile haber verir, bu haber ile tepedeki bileşenler
veriyi değiştirir ve yeni veriyi tepeden aşağı aktarır. React de veri
değişikliğini fark ederek veri ile görüntüyü senkronize eder.

Şimdi bu metodolojiyi kullanarak iki sayaçlı uygulamamızı yazalım, öncelikle
görmemiz gereken artık sayaçların değerlerini `state`'ten değil `props`'tan
aldıkları ve düğmelere tıklandığında tepeden hangi kod aktarılırsa onun
çalıştırıldığı:

```js
var Sayac = React.createClass({

  render: function () {
    return (
    <div>
      Sayaca {this.props.sayac} kez tıkladınız.
      {10 - this.props.sayac} kez daha tıklamalısınız.
      <button onClick={this.props.artir}>Sayaç</button>
    </div>);
  }
});
```

```js
var Sayaclar = React.createClass({
  getInitialState: function () {
    return {sayac1: 3,  sayac2: 5};
  },

  sayac1Artir: function () {
     this.setState({sayac1: this.state.sayac1 + 1,
                    sayac2: this.state.sayac2 - 1});
  },

  sayac2Artir: function () {
     this.setState({sayac1: this.state.sayac1 - 1,
                    sayac2: this.state.sayac2 + 1});
  },

  render: function () {
     return (
       <div>
        <Sayac sayac={this.state.sayac1} artir={this.sayac1Artir}/>
        <Sayac sayac={this.state.sayac2} artir={this.sayac2Artir}/>
      </div>);
  }
})
```

Böylece sistemdeki asıl karmaşıklık, merkezi olarak tepede, ana bileşende
toplanmış oldu, aynı Sayaç bileşenini iki farklı bileşen için
kullanabildik. Sonuç olarak React'in veriyi merkezileştirme ve uygulamayı
bileşenlere ayırmasının uygulamanın geliştirilmesini ne kadar kolaylaştırdığını
ve hatalardan ayırdını görmüş olduk.

## Diğer Önemli Konular

Reactjs konusunda diğer önemli konular olarak şunları sayabiliriz:

1. Geliştirme aşamasında React DevTools çok büyük kolaylık getirmekte, HTML DOM
yapısına benzer şekilde bileşen ağacının görülmesine, bileşenlerin props ve
state değişkenlerinin incelenmesi ve değiştirilmesine olanak vermekte.

2. node.js kullanarak sunucu tarafında React çalıştırmak suretiyle isomorphic
denilen hem sunucu, hem istemci tarafında çalışan uygulamalar
geliştirilmesi. Burada `React.render` yerine HTML çıktısını string olarak
oluşturan `React.renderToString` kullanılmakta ve bu uygulamalar sayesinde daha
hızlı görüntülenen uygulamalar yapılabilmekte.

3. Yeni duyurulan React Native ile bu yapının iPhone ve Android geliştirmesinde
kullanılması mümkün hale geldi. Burada PhoneGap tarzı HTML'in mobil uygulamaya
gömülmesi değil, doğrudan native (yerel) uygulamalar geliştirilmesi sözkonusu.

4. React uygulamaları daha büyüdükçe, veri yönetimi için yine Facebook'un
duyurduğu Flux kütüphanesi kullanılmakta. React'te değişken verinin giderek
yukarı çıktığını gördük, bunun bir sonraki adımı verinin tamamen bileşenlerin
dışında Store (depo) denilen bir yapıda tutulması ve bileşenlerin bu
Store'lardaki verilere üye olması. Store'lardaki değişimlerin de bileşenlerden
gelen action (hareket) denilen değişiklik haberlerine göre yapılması.

## Sonuç

Sonuç olarak React'in 3 temel özelliği olduğunu gördük. Birincisi veri
değişimlerinin her zaman açık seçik yapıldığı ve verinin tek taraflı olarak
aktarıldığı. İkincisi uygulamanın bileşenlere ayrıldığı ve bu bileşenlerin
verilerini tepeden props, kendi içinde state şeklinde yönettiği ve yukarıda bir
değişiklik yapılacaksa bu değişikliklerin çallbackler ile yapıldığı. Üçüncüsü
veri ile görüntü senkronizasyonu için bileşenlerin görüntüsünün her zaman baştan
oluşturulduğu, React'in de sanal DOM adı verilen metodla bunu çok hızlı bir
şekilde yaptığı. Bu özellikler sayesinde React kütüphanesi ile yüksek
performanslı arayüzleri hızlı ve hatasız şekilde geliştirebilmekteyiz.
