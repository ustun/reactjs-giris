var MerhabaDunya = React.createClass({
  render: function () {
    return <div>Merhaba Dunya</div>;
  }
});

var Selamlama = React.createClass({
  render: function () {
    return (
      <div>
        <MerhabaDunya/>
        <MerhabaDunya/>
      </div>)
   }
})

React.render(<Selamlama/>, document.body)
