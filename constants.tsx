
import { DecisionTree } from './types';

export const DECISION_TREE: DecisionTree = {
  "1": {
    id: "1",
    title: "所在地確認",
    question: "請問您目前所在的會議室是？",
    options: [
      { label: "151 (視訊) 會議室", nextId: "1.151" },
      { label: "153 (大人) 會議室", nextId: "1.153" },
      { label: "777 (包袋) 會議室", nextId: "1.777" }
    ]
  },
  "1.151": {
    id: "1.151",
    title: "151 會議室 - 目的確認",
    question: "是否要進行視訊會議？",
    options: [
      { label: "是", nextId: "2.151" },
      { label: "否", nextId: "3.151" }
    ]
  },
  "1.153": {
    id: "1.153",
    title: "153 會議室 - 目的確認",
    question: "是否要進行視訊會議？",
    options: [
      { label: "是", nextId: "2.153" },
      { label: "否", nextId: "3.153" }
    ]
  },
  "1.777": {
    id: "1.777",
    title: "777 會議室 - 目的確認",
    question: "是否要進行視訊會議？",
    options: [
      { label: "是", nextId: "2.777" },
      { label: "否", nextId: "3.777" }
    ]
  },
  "2.151": {
    id: "2.151",
    title: "151 會議室 - 視訊設備設置",
    question: "視訊會議主持人是？",
    options: [
      { label: "會議室電腦", nextId: "2.151.A" },
      { label: "自帶電腦 (筆電)", nextId: "2.151.B" }
    ]
  },
  "2.153": {
    id: "2.153",
    title: "153 會議室 - 視訊設備設置",
    question: "視訊會議主持人是？",
    options: [
      { label: "會議室電腦", nextId: "2.153.A" },
      { label: "自帶電腦 (筆電)", nextId: "2.153.B" }
    ]
  },
  "2.777": {
    id: "2.777",
    title: "777 會議室 - 視訊設備設置",
    question: "視訊會議主持人是？",
    options: [
      { label: "會議室電腦", nextId: "2.777.A" },
      { label: "自帶電腦 (筆電)", nextId: "2.777.B" }
    ]
  },
  "3.151": {
    id: "3.151",
    title: "151 會議室 - 一般投影設置",
    question: "使用的是？",
    options: [
      { label: "會議室電腦", nextId: "3.151.A" },
      { label: "自帶電腦 (筆電)", nextId: "3.151.B" }
    ]
  },
  "3.153": {
    id: "3.153",
    title: "153 會議室 - 一般投影設置",
    question: "使用的是？",
    options: [
      { label: "會議室電腦", nextId: "3.153.A" },
      { label: "自帶電腦 (筆電)", nextId: "3.153.B" }
    ]
  },
  "3.777": {
    id: "3.777",
    title: "777 會議室 - 一般投影設置",
    question: "使用的是？",
    options: [
      { label: "會議室電腦", nextId: "3.777.A" },
      { label: "自帶電腦 (筆電)", nextId: "3.777.B" }
    ]
  },
  "2.151.A": {
    id: "2.151.A",
    title: "151 會議室：視訊會議 (會議室電腦)",
    isFinal: true,
    content: "151會議室的電視型號是[AOC 70U6195 LED](對應照片 151_TV.jpg)遙控器正面貼紙[151會議室](對應照片 151_TV_Remotecontrol.jpg)，請依序操作遙控器[開啟電源](對應照片 151_TV_Remotecontrol_On.jpg)，[訊號源](對應照片 151_TV_Remotecontrol_Source.jpg)，看著電視畫面選擇[HDMI 2](對應照片 151_TV_HDMI2.jpg)；接著請操作會議室的無線鍵盤滑鼠組(對應照片 151_wirelessKM.jpg)，將無線麥克風喇叭(對應照片 151_Poly.jpg)[電源鍵](對應照片 151_Poly_On.jpg)長壓至「亮起白燈」為止(對應照片 151_Poly_PowerOn.jpg)。"
  },
  "2.153.A": {
    id: "2.153.A",
    title: "153 會議室：視訊會議 (會議室電腦)",
    isFinal: true,
    content: "153會議室的電視型號是[TCL 85QM88](對應照片 153_TV.jpg)遙控器正面貼紙[153會議室](對應照片 153_TV_Remotecontrol.jpg)，請依序操作遙控器[開啟電源](對應照片 153_TV_Remotecontrol_On.jpg)，[訊號源](對應照片 153_TV_Remotecontrol_Source.jpg)，看著電視畫面選擇[HDMI 2](對應照片 153_TV_HDMI2.jpg)；接著請操作會議室的無線鍵盤滑鼠組(對應照片 153_wirelessKM.jpg)，將無線麥克風喇叭(對應照片 153_Poly.jpg)[電源鍵](對應照片 153_Poly_On.jpg)長壓至「亮起白燈」為止(對應照片 153_Poly_PowerOn.jpg)。"
  },
  "2.777.A": {
    id: "2.777.A",
    title: "777 會議室：視訊會議 (會議室電腦)",
    isFinal: true,
    content: "777會議室的電視型號是[SAMSUNG UA75BU8000WXZW](對應照片 777_TV.jpg)遙控器正面貼紙[777會議室](對應照片 777_TV_Remotecontrol.jpg)，請依序操作遙控器[開啟電源](對應照片 777_TV_Remotecontrol_On.jpg)，[訊號源](對應照片 777_TV_Remotecontrol_Source.jpg)，看著電視畫面選擇[HDMI 2](對應照片 777_TV_HDMI2.jpg)；接著請操作會議室的無線鍵盤滑鼠組(對應照片 777_wirelessKM.jpg)，將無線麥克風喇叭(對應照片 777_Poly.jpg)[電源鍵](對應照片 777_Poly_On.jpg)長壓至「亮起白燈」為止(對應照片 777_Poly_PowerOn.jpg)。"
  },
  "2.151.B": {
    id: "2.151.B",
    title: "151 會議室：視訊會議 (自帶電腦)",
    isFinal: true,
    content: "151會議室的電視型號是[AOC 70U6195 LED](對應照片 151_TV.jpg)遙控器正面貼紙[151會議室](對應照片 151_TV_Remotecontrol.jpg)，請依序操作遙控器[開啟電源](對應照片 151_TV_Remotecontrol_On.jpg)，[訊號源](對應照片 151_TV_Remotecontrol_Source.jpg)，看著電視畫面選擇[HDMI 1](對應照片 151_TV_HDMI1.jpg)；接著請將無線HDMI接上自帶電腦(筆電)的HDMI孔(對應照片 151_wirelessHDMI.jpg)。"
  },
  "2.153.B": {
    id: "2.153.B",
    title: "153 會議室：視訊會議 (自帶電腦)",
    isFinal: true,
    content: "153會議室的電視型號是[TCL 85QM88](對應照片 153_TV.jpg)遙控器正面貼紙[153會議室](對應照片 153_TV_Remotecontrol.jpg)，請依序操作遙控器[開啟電源](對應照片 153_TV_Remotecontrol_On.jpg)，[訊號源](對應照片 153_TV_Remotecontrol_Source.jpg)，看著電視畫面選擇[HDMI 2](對應照片 153_TV_HDMI1.jpg)；接著請將無線HDMI接上自帶電腦(筆電)的HDMI孔(對應照片 153_wirelessHDMI.jpg)。"
  },
  "2.777.B": {
    id: "2.777.B",
    title: "777 會議室：視訊會議 (自帶電腦)",
    isFinal: true,
    content: "777會議室的電視型號是[SAMSUNG UA75BU8000WXZW](對應照片 777_TV.jpg)遙控器正面貼紙[777會議室](對應照片 777_TV_Remotecontrol.jpg)，請依序操作遙控器[開啟電源](對應照片 777_TV_Remotecontrol_On.jpg)，[訊號源](對應照片 777_TV_Remotecontrol_Source.jpg)，看著電視畫面選擇[HDMI 2](對應照片 777_TV_HDMI1.jpg)；接著請將無線HDMI接上自帶電腦(筆電)的HDMI孔(對應照片 777_wirelessHDMI.jpg)。"
  },
  "3.151.A": {
    id: "3.151.A",
    title: "151 會議室：一般使用 (會議室電腦)",
    isFinal: true,
    content: "151會議室的電視型號是[AOC 70U6195 LED](對應照片 151_TV.jpg)遙控器正面貼紙[151會議室](對應照片 151_TV_Remotecontrol.jpg)，請依序操作遙控器[開啟電源](對應照片 151_TV_Remotecontrol_On.jpg)，[訊號源](對應照片 151_TV_Remotecontrol_Source.jpg)，看著電視畫面選擇[HDMI 2](對應照片 151_TV_HDMI2.jpg)；接著請操作會議室的無線鍵盤滑鼠組(對應照片 151_wirelessKM.jpg)。"
  },
  "3.153.A": {
    id: "3.153.A",
    title: "153 會議室：一般使用 (會議室電腦)",
    isFinal: true,
    content: "153會議室的電視型號是[TCL 85QM88](對應照片 153_TV.jpg)遙控器正面貼紙[153會議室](對應照片 153_TV_Remotecontrol.jpg)，請依序操作遙控器[開啟電源](對應照片 153_TV_Remotecontrol_On.jpg)，[訊號源](對應照片 153_TV_Remotecontrol_Source.jpg)，看著電視畫面選擇[HDMI 2](對應照片 153_TV_HDMI2.jpg)；接著請操作會議室的無線鍵盤滑鼠組(對應照片 153_wirelessKM.jpg)。"
  },
  "3.777.A": {
    id: "3.777.A",
    title: "777 會議室：一般使用 (會議室電腦)",
    isFinal: true,
    content: "777會議室的電視型號是[SAMSUNG UA75BU8000WXZW](對應照片 777_TV.jpg)遙控器正面貼紙[777會議室](對應照片 777_TV_Remotecontrol.jpg)，請依序操作遙控器[開啟電源](對應照片 777_TV_Remotecontrol_On.jpg)，[訊號源](對應照片 777_TV_Remotecontrol_Source.jpg)，看著電視畫面選擇[HDMI 2](對應照片 777_TV_HDMI2.jpg)；接著請操作會議室的無線鍵盤滑鼠組(對應照片 777_wirelessKM.jpg)。"
  },
  "3.151.B": {
    id: "3.151.B",
    title: "151 會議室：一般使用 (自帶電腦)",
    isFinal: true,
    content: "151會議室的電視型號是[AOC 70U6195 LED](對應照片 151_TV.jpg)遙控器正面貼紙[151會議室](對應照片 151_TV_Remotecontrol.jpg)，請依序操作遙控器[開啟電源](對應照片 151_TV_Remotecontrol_On.jpg)，[訊號源](對應照片 151_TV_Remotecontrol_Source.jpg)，看著電視畫面選擇[HDMI 1](對應照片 151_TV_HDMI1.jpg)；接著請將無線HDMI接上自帶電腦(筆電)的HDMI孔(對應照片 151_wirelessHDMI.jpg)。"
  },
  "3.153.B": {
    id: "3.153.B",
    title: "153 會議室：一般使用 (自帶電腦)",
    isFinal: true,
    content: "153會議室的電視型號是[TCL 85QM88](對應照片 153_TV.jpg)遙控器正面貼紙[153會議室](對應照片 153_TV_Remotecontrol.jpg)，請依序操作遙控器[開啟電源](對應照片 153_TV_Remotecontrol_On.jpg)，[訊號源](對應照片 153_TV_Remotecontrol_Source.jpg)，看著電視畫面選擇[HDMI 2](對應照片 153_TV_HDMI1.jpg)；接著請將無線HDMI接上自帶電腦(筆電)的HDMI孔(對應照片 153_wirelessHDMI.jpg)。"
  },
  "3.777.B": {
    id: "3.777.B",
    title: "777 會議室：一般使用 (自帶電腦)",
    isFinal: true,
    content: "777會議室的電視型號是[SAMSUNG UA75BU8000WXZW](對應照片 777_TV.jpg)遙控器正面貼紙[777會議室](對應照片 777_TV_Remotecontrol.jpg)，請依序操作遙控器[開啟電源](對應照片 777_TV_Remotecontrol_On.jpg)，[訊號源](對應照片 777_TV_Remotecontrol_Source.jpg)，看著電視畫面選擇[HDMI 2](對應照片 777_TV_HDMI1.jpg)；接著請將無線HDMI接上自帶電腦(筆電)的HDMI孔(對應照片 777_wirelessHDMI.jpg)。"
  }
};
