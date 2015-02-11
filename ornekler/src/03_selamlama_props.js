var MerhabaDunya = React.createClass({
  render: function () {
    return <div>Merhaba {this.props.isim}</div>
  }
});

var Selamlama = React.createClass({
    render: function () {
      return <div>
         <MerhabaDunya isim="Üstün"/>
         <MerhabaDunya isim="Özgür"/>
       </div>
     }
})

React.render(<Selamlama/>, document.body)
