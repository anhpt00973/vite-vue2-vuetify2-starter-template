import Vue from 'vue';
import Vuex from 'vuex';
import toast from './moduleToast';
import dialog from './moduleDialog';
import darkModeThemes from "../@core/layouts/components/skin-darkmode/DarkModeThemes.json"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isChanged: false,
    reloadOff: false,
    TICKINTERVAL: 5000,
    XAXISRANGE: 5*60*1000,
    themeTab: 0,
    titleRoute: '',
    miniVariant: true,
    isDarkMode: false,
    item: [],
    chartData: [],
    appBarIsVisible: true,
    drawerIsVisible: true,
    infoHeader: true,
    indexTab: 0,
    isLoading: false,
    userInfo: localStorage.getItem("user"),
    timeList: [
      {
        time: 1,
        title: "Tự động",
      },
      {
        time: 5,
        title: "5 phút trước",
      },
      {
        time: 10,
        title: "10 phút trước",
      },
      {
        time: 15,
        title: "15 phút trước",
      },
      {
        time: 30,
        title: "30 phút trước",
      },
      {
        time: 60,
        title: "1 giờ trước",
      },
      {
        time: 180,
        title: "3 giờ trước",
      },
      {
        time: 360,
        title: "6 giờ trước",
      },
      {
        time: 720,
        title: "12 giờ trước",
      },
      {
        time: 1440,
        title: "24 giờ trước",
      },
      {
        time: 2880,
        title: "2 ngày trước",
      },
      {
        time: 10080,
        title: "7 ngày trước",
      },
      {
        time: 43200,
        title: "30 ngày trước",
      },
      {
        time: 129600,
        title: "90 ngày trước",
      },
      {
        time: 262080,
        title: "6 tháng trước",
      },
      {
        time: 525600,
        title: "1 năm trước",
      },

    ],
    Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJraWQiOiI4NDc4YTJiNS0yMmZiLTQ3YTEtYTg4NS01MmIxYTI5NTI5MGUiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlZDYxYTFmNi0yMzRkLTQxMTgtODlmOC04NDBmZDQyNWM0MzUiLCJyb2xlIjoiYWRtaW4gbW9kIGFkbWluIHJlYWxtX21hbmFnZW1lbnQgY2xpZW50X21hbmFnZW1lbnQgdXNlcl9tYW5hZ2VtZW50IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgyL2F1dGgvcmVhbG0vbW90aS1kZXYiLCJ0eXAiOiJCZWFyZXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZG1pbiIsImF1ZCI6ImFjY291bnQiLCJhY3IiOjEsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJhZG1pbiIsIm1vZCIsImFkbWluIiwicmVhbG1fbWFuYWdlbWVudCIsImNsaWVudF9tYW5hZ2VtZW50IiwidXNlcl9tYW5hZ2VtZW50Il19LCJhenAiOiJtb3RpLWRldiIsInNjb3BlIjoiVF9WYW5CYW5MdXVUcnVfTG9haVZhbkJhbjAxOjIgVF9WYW5CYW5MdXVUcnVfTG9haVZhbkJhbjAyOjIgVF9WYW5CYW5MdXVUcnVfTG9haVZhbkJhbjAzOjIgVF9WYW5CYW5MdXVUcnVfTG9haVZhbkJhbjA0OjIgVF9WYW5CYW5MdXVUcnVfTG9haVZhbkJhbjA1OjIgVF9WYW5CYW5MdXVUcnVfTG9haVZhbkJhbjA2OjIgVF9WYW5CYW5MdXVUcnVfTG9haVZhbkJhbjA3OjIgVF9WYW5CYW5MdXVUcnVfTG9haVZhbkJhbjA4OjIgVF9WYW5CYW5MdXVUcnVfTG9haVZhbkJhbjA5OjIgVF9WYW5CYW5MdXVUcnVfTG9haVZhbkJhbjEwOjIgVF9WYW5CYW5MdXVUcnVfTG9haVZhbkJhbjExOjIgVF9WYW5CYW5MdXVUcnVfTG9haVZhbkJhbjEyOjIgVF9WYW5CYW5MdXVUcnVfTG9haVZhbkJhbjEzOjIgVF9WYW5CYW5MdXVUcnVfTG9haVZhbkJhbjE0OjIgdXNlciBjbGllbnQgcmVhbG0gYWNjZXNzX3Rva2VuIiwiZXhwIjoxNjg1NDk3OTczLCJpYXQiOjE2ODU0OTYxNzMsImp0aSI6ImU3YzkzZjI2LTdmMGMtNGU1MC05OTg0LTAyMjc2ZWJiYTUyNSIsImVtYWlsIjoiYWRtaW5AZmRzLnZuIn0.itTmRxgw2DNYLbCgNYAbmK4O45X5rFzyDp7fbtiX66G2kwIJULDNaRZhXrxeMeTcW74RpuHZe72p-F7WThE892-8_w6IqebzySnVNsgeW3F3AC_QjnNmzwTgOuTRQ6LeafsvkK8CW73bXlaQWCLifIw0Mxk4D6mrMVN1ZPaRvtZBASv9v1UW-CuFMM8KiMQ-S0Jc6EwXTiafxr9n5Ol-cKpQJ4pTCF9u2YG4m1ZFMhcl7qPjq28wrTynIB-MaUOROjpx2OgboBu-JxckQZkqcHyqruwcoMqrGPEkbLdowjw68bkbY85sW2i190qY11vxH7azAL2Pdo8enwHvHrmGQw"
  },
  getters: {
    getIsChanged: (state) => {
      return state.isChanged
    },
    getReloadOff: (state) => {
      return state.reloadOff
    },
    getTICKINTERVAL: (state) => {
      return state.TICKINTERVAL
    },
    getXAXISRANGE: (state) => {
      return state.XAXISRANGE
    },
    getThemeTab: (state) => {
      return state.themeTab
    },
    gettitleRoute: (state) => {
      return state.titleRoute
    },
    getMiniVariant: (state) => {
      return state.miniVariant
    },
    getIsDarkMode: (state) => {
      return state.isDarkMode
    },
    getItem: (state) => {
      return state.item
    },
    getChartData: (state) => {
      return state.chartData
    },
    getAppBarIsVisible: (state) => {
      return state.appBarIsVisible
    },
    getDrawerIsVisible: (state) => {
      return state.drawerIsVisible
    },
    getInfoHeader: (state) => {
      return state.infoHeader
    },
    getIndexTab: (state) => state.indexTab,
    getIsSigned: (state) => {
      return state.isSigned;
    },
    getUserInfo(state) {
      return JSON.parse(state.userInfo);
    },
    getLoading(state) {
      return state.isLoading;      
    },
  },
  mutations: {
    SET_ISCHANGED (state, payload) {
      state.isChanged = payload;
    },
    SET_RELOADOFF (state, payload) {
      state.reloadOff = payload;
    },
    SET_TICKINTERVAL (state, payload) {
      state.TICKINTERVAL = payload;
    },
    SET_XAXISRANGE (state, payload) {
      state.XAXISRANGE = payload;
    },
    SET_THEMETAB (state, payload) {
      state.themeTab = payload;
    },
    SET_titleRoute (state, payload) {
      state.titleRoute = payload;
    },
    SET_MINIVARIANT(state, payload) {
      state.miniVariant = payload;
    },
    SET_ISDARKMODE(state, payload) {
      state.isDarkMode = payload;
    },
    SET_ITEM(state, payload) {   
      state.item = payload;
    },
    SET_CHARTDATA(state, payload) {
      state.chartData = payload;
    },
    SET_INFOHEADER(state, payload) {
      state.infoHeader = payload;
    },
    SET_APPBARISVISIBLE(state, payload) {
      state.appBarIsVisible = payload;
    },
    SET_DRAWERISVISIBLE(state, payload) {
      state.drawerIsVisible = payload;
    },
    SET_INDEXTAB(state, indexTab) {
      state.indexTab = indexTab;
    },
    SET_ISSIGNED(state, payload) {
      state.isSigned = payload;
    },
    setUserInfo(state, payload) {
      state.userInfo = payload;
    },
    setLoading(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    getTheme(_, value) {
      if (value == 1) {
        document.documentElement.style.setProperty('--background-family1', darkModeThemes[1]["background-family1"]) 
        document.documentElement.style.setProperty('--container-background1', darkModeThemes[1]["container-background"]) 
        document.documentElement.style.setProperty('--text-color1', darkModeThemes[1]["text-color1"])
        document.documentElement.style.setProperty('--highlight-text-color1', darkModeThemes[1]["highlight-text-color1"])
        document.documentElement.style.setProperty('--container-acive-color1', darkModeThemes[1]["container-acive-color"]) 
        document.documentElement.style.setProperty('--border-color', darkModeThemes[1]["border-color"]) 

        document.documentElement.style.setProperty('--background-family2', darkModeThemes[1]["background-family1"]) 
        document.documentElement.style.setProperty('--container-background2', darkModeThemes[1]["container-background"]) 
        document.documentElement.style.setProperty('--text-color2', darkModeThemes[1]["text-color1"]) 
        document.documentElement.style.setProperty('--highlight-text-color2', darkModeThemes[1]["highlight-text-color1"]) 
        document.documentElement.style.setProperty('--container-acive-color2', darkModeThemes[1]["container-acive-color"]) 
        document.documentElement.style.setProperty('--border-color2', darkModeThemes[1]["border-color"]) 
        document.documentElement.style.setProperty('--button-color1', darkModeThemes[1]["button-color1"])
        document.documentElement.style.setProperty('--navbar-text-color1', darkModeThemes[1]["navbar-text-color1"])
        
      } else if (value == 2) {
        document.documentElement.style.setProperty('--background-family1', darkModeThemes[2]["background-family1"]) 
        document.documentElement.style.setProperty('--container-background1', darkModeThemes[2]["container-background"]) 
        document.documentElement.style.setProperty('--text-color1', darkModeThemes[2]["text-color1"])
        document.documentElement.style.setProperty('--highlight-text-color1', darkModeThemes[2]["highlight-text-color1"])
        document.documentElement.style.setProperty('--container-acive-color1', darkModeThemes[2]["container-acive-color"]) 
        document.documentElement.style.setProperty('--border-color', darkModeThemes[2]["border-color"]) 

        document.documentElement.style.setProperty('--background-family2', darkModeThemes[2]["background-family1"]) 
        document.documentElement.style.setProperty('--container-background2', darkModeThemes[2]["container-background"]) 
        document.documentElement.style.setProperty('--text-color2', darkModeThemes[2]["text-color1"]) 
        document.documentElement.style.setProperty('--highlight-text-color2', darkModeThemes[2]["highlight-text-color1"]) 
        document.documentElement.style.setProperty('--container-acive-color2', darkModeThemes[2]["container-acive-color"]) 
        document.documentElement.style.setProperty('--border-color2', darkModeThemes[2]["border-color"]) 
        document.documentElement.style.setProperty('--button-color1', darkModeThemes[2]["button-color1"])
        document.documentElement.style.setProperty('--navbar-text-color1', darkModeThemes[2]["navbar-text-color1"])

      } else if (value == 0) {
        document.documentElement.style.setProperty('--background-family1', darkModeThemes[0]["background-family1"]) 
        document.documentElement.style.setProperty('--container-background1', darkModeThemes[0]["container-background"]) 
        document.documentElement.style.setProperty('--text-color1', darkModeThemes[0]["text-color1"])
        document.documentElement.style.setProperty('--highlight-text-color1', darkModeThemes[0]["highlight-text-color1"])
        document.documentElement.style.setProperty('--container-acive-color1', darkModeThemes[0]["container-acive-color"]) 
        document.documentElement.style.setProperty('--border-color', darkModeThemes[0]["border-color"]) 

        document.documentElement.style.setProperty('--background-family2', darkModeThemes[0]["background-family2"]) 
        document.documentElement.style.setProperty('--container-background2', darkModeThemes[0]["container-background2"]) 
        document.documentElement.style.setProperty('--text-color2', darkModeThemes[0]["text-color2"]) 
        document.documentElement.style.setProperty('--highlight-text-color2', darkModeThemes[0]["highlight-text-color2"]) 
        document.documentElement.style.setProperty('--container-acive-color2', darkModeThemes[0]["container-acive-color2"]) 
        document.documentElement.style.setProperty('--border-color2', darkModeThemes[0]["border-color2"]) 
        
        document.documentElement.style.setProperty('--button-color1', darkModeThemes[0]["button-color1"])
        document.documentElement.style.setProperty('--navbar-text-color1', darkModeThemes[0]["navbar-text-color1"])
      }
    },
    getThemeTab() {
      if (!localStorage.getItem('themeTab')) {
        let newObject = {
          name: 'Default',
          value: 0
        } 
        localStorage.setItem('themeTab', JSON.stringify(newObject))
      } 
    },
    async restructuringBody(_, {body, getNewValue, gt}) {
      // định nghĩa và lọc %__%
      const current_time_10_num = new Date(  (new Date()).getTime() - 0).getTime() - 10000
      const current_time_10_string = await this.dispatch('convertNumTimeToString', current_time_10_num)
      const current_time_num = new Date(  (new Date()).getTime() - 0).getTime()
      const current_time_string = await this.dispatch('convertNumTimeToString', current_time_num)
      // console.log('body', body)
      if ( body=='') { body = '{}'}
      const parsedBody = JSON.parse(body);
      if (this.dispatch('hasValueX', 
        {obj: parsedBody, seg: '%CURRENT_TIME_10%'}
      )) {
        const auto_time = await this.dispatch('convertNumTimeToString', 
					(current_time_10_num)  - this.getters.getXAXISRANGE
        )
        body = body.replace(/%CURRENT_TIME_10%/g, current_time_10_string)
        body = body.replace(/%AUTO_TIME%/g, auto_time)
      } else if (this.dispatch('hasValueX', 
        {obj: JSON.parse(body), seg: '%CURRENT_TIME%'}
      )) {
        const auto_time = await this.dispatch('convertNumTimeToString', 
          (current_time_num)  - this.getters.getXAXISRANGE
        )
        body = body.replace(/%CURRENT_TIME_10%/g, current_time_string)
        body = body.replace(/%AUTO_TIME%/g, auto_time)
      }

      const day = String((new Date(current_time_num)).getDate()).padStart(2, '0');
      const month = String((new Date(current_time_num)).getMonth() + 1).padStart(2, '0'); 
      const year = (new Date(current_time_num)).getFullYear(); // lấy năm
      const start_day = `${year}-${month}-${day} 00:00:00.000`; 
      const start_month =  `${year}-${month}-01 00:00:00.000`; 
      const end_month = (month == '01' || month == '03' || month == '05' || month == '07' || month == '08' || month == '10' || month == '12')
      ? `${year}-${month}-31 23:59:59.999` 
      : `${year}-${month}-30 23:59:59.999` 
      const start_year = `${year}-01-01 00:00:00.000`;
      const end_year = `${year}-12-31 23:59:59.999`;
      let fixed_interval = '5s'
      let fixed_interval_value = 5000
      if (this.getters.getXAXISRANGE <= 15*60*1000) {
        fixed_interval = '5s' 
        fixed_interval_value = 5000
      } else if (this.getters.getXAXISRANGE <= 1*60*60*1000) {
        fixed_interval = '15s'
        fixed_interval_value = 15000
      } else if (this.getters.getXAXISRANGE <= 12*60*60*1000) {
        fixed_interval = '60s'
        fixed_interval_value = 60000
      } else if (this.getters.getXAXISRANGE <= 2*24*60*60*1000) {
        fixed_interval = '5m'
        fixed_interval_value = 5*60000
      } else if (this.getters.getXAXISRANGE <= 30*24*60*60*1000) {
        fixed_interval = '1h'
        fixed_interval_value = 60*60000
      } else if (this.getters.getXAXISRANGE <= 90*24*60*60*1000) {
        fixed_interval = '12h'
        fixed_interval_value = 12*60*60000
      } else if (this.getters.getXAXISRANGE <= 200*24*60*60*1000) {
        fixed_interval = '1d'
        fixed_interval_value = 24*60*60000
      } else if (this.getters.getXAXISRANGE > 200*24*60*60*1000) {
        fixed_interval = '2d'
        fixed_interval_value = 7*24*60*60000
      }
      body = body.replace(/%FIXED_INTERVAL%/g, fixed_interval )
      body = body.replace(/%START_DAY%/g, start_day)
      body = body.replace(/%START_MONTH%/g, start_month)
      body = body.replace(/%end_month/g, end_month)
      body = body.replace(/%START_YEAR%/g, start_year)
      body = body.replace(/%END_YEAR%/g, end_year)
      if ( body=='') { body = '{}'}
      // nếu tồn tại gt=true, let thì thay thế vào lte=gt+fixed
      let timestampObj =await this.dispatch('findSegInObj',
      { obj: JSON.parse(body), seg: '@timestamp' }
      ) 
      if(timestampObj) {
				const timestampKeys = Object.keys(timestampObj);
				// làm tròn thời gian second và milesecond về 00.000
				const newTime1  = new Date(timestampObj[timestampKeys[1]])
				newTime1.setMilliseconds(0);
				// newTime1.setSeconds(0);
				newTime1.setHours(newTime1.getHours() + 7);
        if (newTime1 instanceof Date && !isNaN(newTime1)) {
				timestampObj[timestampKeys[1]]  = newTime1.toISOString().slice(0, 23).replace("T", " ");
        }
        const newTime0  = new Date(timestampObj[timestampKeys[0]])
        newTime0.setMilliseconds(0);
        newTime0.setSeconds(0);
        newTime0.setHours(newTime0.getHours() + 7);
        if (newTime0 instanceof Date && !isNaN(newTime0)) {
        timestampObj[timestampKeys[0]]  = newTime0.toISOString().slice(0, 23).replace("T", " ");
        }
				const jsonBody =await this.dispatch('updateObjValueFromObj',{ obj: JSON.parse(body), key: '@timestamp', value: timestampObj }
        )
				body = JSON.stringify(jsonBody, null, 2)
        if (getNewValue==true && gt) {
          const gt2 = gt + fixed_interval_value
          const lte = gt2 + fixed_interval_value
          let timestampObj =await this.dispatch('findSegInObj', 
            {
              obj: JSON.parse(body), 
              seg: '@timestamp'
            }
          )
          const timestampKeys = Object.keys(timestampObj);
          timestampObj[timestampKeys[0]] = await this.dispatch('convertNumTimeToString', gt2)
          timestampObj[timestampKeys[1]] = await this.dispatch('convertNumTimeToString', lte)
          const jsonBody = await this.dispatch('updateObjValueFromObj',
            {
              obj: JSON.parse(body),
              key: '@timestamp',
              value: timestampObj
            }
          )
          body = JSON.stringify(jsonBody, null, 2)
        } else if (getNewValue=="getTimeArray") {
          let timestampObj =await this.dispatch('findSegInObj', 
            {
              obj: JSON.parse(body), 
              seg: '@timestamp'
            }
          )
          const timestampKeys = Object.keys(timestampObj);
          // console.log('hi', timestampObj)
          
          const newgt = new Date(timestampObj[timestampKeys[0]]);
          const newlte = new Date(timestampObj[timestampKeys[1]]);
          const interval = fixed_interval_value; // 5 giây

          const result = [];
          let currentTime = new Date(Math.floor(newgt.getTime() / interval) * interval);

          while (currentTime <= newlte) {
            result.push(currentTime.toISOString());
            currentTime = new Date(currentTime.getTime() + interval);
          }
          return result
        }
      }
      return body
    },
    convertNumTimeToString(_, data) {
      const date = new Date(data); // tạo đối tượng Date từ số này
			const year = date.getFullYear(); // lấy năm
			const month = String(date.getMonth() + 1).padStart(2, '0'); // lấy tháng và thêm số 0 ở trước nếu cần thiết
			const day = String(date.getDate()).padStart(2, '0'); // lấy ngày và thêm số 0 ở trước nếu cần thiết
			const hours = String(date.getHours()).padStart(2, '0'); // lấy giờ và thêm số 0 ở trước nếu cần thiết
			const minutes = String(date.getMinutes()).padStart(2, '0'); // lấy phút và thêm số 0 ở trước nếu cần thiết
			const seconds = String(date.getSeconds()).padStart(2, '0'); // lấy giây và thêm số 0 ở trước nếu cần thiết
			const milliseconds = String(date.getMilliseconds()).padStart(3, '0'); // lấy mili giây và thêm số 0 ở trước nếu cần thiết
			const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`; // tạo chuỗi kết quả
			return formattedDate;
    },
    convertStringTimeToNum(_,data) {
			const timestamp = Date.parse(data);
			return timestamp;
		},
    findSegInObj(_, {obj, seg}) {
      for (let prop in obj) {
          if (obj[prop] && typeof obj[prop] === 'object') {
              const value = seg.split(".").reduce((obj, prop) => obj[prop], obj[prop]);
              // Kiểm tra xem đối tượng hiện tại có chứa thuộc tính seg không
              if (obj[prop] && value !== undefined) {
                  return value;
              } else {
                  // Nếu không tìm thấy seg thì tiếp tục tìm trong đối tượng hiện tại
                  const result = this.dispatch('findSegInObj', 
                    {obj: obj[prop], seg: seg}
                  )
                  if (result !== undefined) {
                      return result;
                  }
              }
          } 
      }            
      return undefined;
    },
    hasValueX(_, {obj, x}) {
			for (let prop in obj) {
				if (obj[prop]) {
				if (obj[prop] === x) {
					return true;
				} else if (typeof obj[prop] === 'object') {
					if (this.dispatch('hasValueX', 
            {obj: obj[prop], x: x}
          )) {
					return true;
					}
				}
				}
			}
			return false;
		},
    updateObjValueFromObj(_, {obj, key, value}) {
			for (let prop in obj) {
				if (prop === key) {
					obj[prop] = value;
					return obj;
				}
				if (typeof obj[prop] === 'object') {
					let result = this.dispatch('updateObjValueFromObj',
            { obj: obj[prop], key: key, value: value }
          )
					if (result) {
						return obj;
					}
				}
			}
			return null;
		},

  },
  modules: {
    toast,
    dialog,
  }
});
