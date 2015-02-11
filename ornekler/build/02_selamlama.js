var MerhabaDunya = React.createClass({displayName: "MerhabaDunya",
  render: function () {
    return React.createElement("div", null, "Merhaba Dunya");
  }
});

var Selamlama = React.createClass({displayName: "Selamlama",
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement(MerhabaDunya, null), 
        React.createElement(MerhabaDunya, null)
      ))
   }
})

React.render(React.createElement(Selamlama, null), document.body)
