import { StyleSheet, TextInput } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    flex:1,
    flexDirection:"row",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  button: {
    borderWidth:3,
    borderColor:'#f7b731',
    alignItems:'center',
    justifyContent:'center',
    width:180,
    height:180,
    borderRadius:90,
  },
  clock: {
    //some code
  },
  archive: {
    marginLeft: 20
  },
  palette: {
    marginTop: 20
  },
  power: {
    marginTop: 20,
    marginLeft: 20
  },
  icon: {
    color: '#f7b731',
    fontSize:50,
  },
  listElement: {
    borderWidth:3,
    borderColor:'#f7b731',
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
  },

  clockContainer: {
    backgroundColor: 'white',
    opacity: 0.8,
    padding: 20
  },

  TextInputStyle: {
    textAlign: 'center',  
    height: 40,  
    borderRadius: 10,  
    borderWidth: 2,  
    borderColor: '#f7b731',
    backgroundColor: 'white',
    opacity: 0.8,
  },

  paletteButton: {
    textAlign: 'center',
    padding: 10,
    marginTop: 20,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#f7b731',
  },

  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
});
  