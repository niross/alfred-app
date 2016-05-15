import { StyleSheet } from 'react-native';

export const mainStyles = StyleSheet.create({
  text: {
    backgroundColor: '#000000'
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF'
  },
  container: {
    flex: 1
  }
});

export const baseItemStyles = StyleSheet.create({
  listView: {
    backgroundColor: '#F5FCFF'
  },
  image: {
    height: 200,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  container: {
    padding: 80,
    height: 200,
    position: 'relative',
    backgroundColor: '#000000'

  },
  containerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  textWrap: {
    padding: 10
  },
  containerText: {
    color: '#ffffff',
    fontSize: 20,
    flex: 1,
    opacity: 1,
    fontWeight: 'bold',
    shadowColor: 'red',
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {
      height: 8,
      width: 8
    },
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'solid'
  },
  splash: {
    flex: 1
  },
  splashInner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#000000'
  }
});

export const blockStyles = StyleSheet.create({
  container: {
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#ffffff',
    margin: 10,
    marginVertical: 5,
    overflow: 'hidden'
  },
  titleContainer: {
    borderBottomWidth: 0.5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 2.5,
    borderBottomColor: '#d6d7da',
    backgroundColor: '#f6f7f8',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  titleText: {
    fontSize: 14,
    fontWeight: '500'
  },
  descriptionText: {
    fontSize: 14
  },
  disclosure: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10
  },
  disclosureIcon: {
    width: 12,
    height: 8
  },
  children: {
    margin: 10
  }
});

export const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ecf0f1'
  },
  switchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30
  },
  dimmerContainer: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    padding: 20
  },
  nodeTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  nodeTitle: {
    color: '#34495e',
    fontWeight: 'bold',
    fontSize: 18
  },
  splash: {
    flex: 1
  },
  splashInner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const roomStyles = StyleSheet.create({
  splash: {
    flex: 1
  },
  splashInner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export const scrollPageStyles = StyleSheet.create({
  container: {
    backgroundColor: '#e9eaed',
    flex: 1
  },
  spacer: {
    height: 270
  },
  wrapper: {
    flex: 1
  }
});

export const staticPageStyles = StyleSheet.create({
  container: {
    backgroundColor: '#e9eaed',
    flex: 1
  },
  spacer: {
    height: 270
  },
  wrapper: {
    flex: 1,
    paddingTop: 10
  }
});

export const titleStyles = StyleSheet.create({
  container: {
    height: 200
  },
  containerInner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  text: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold'
  }
});

