export interface PcList {
  pcCode: string, pcBrand: string, pcType: string, cpuName: string, cpuKind: string,
  cpuSpeed: string, ramSpeed: string, mainBoardRamLimit: string, hddSpace: string,
  hddSpeed: string, ssdSpace: string, ssdSpeed: string, graphicKind: string,
  osName: string, deliveryDate: string;
  pcPrice: number, pcDeliveryPrice: number, pcGrade: number;
  pcListImg: PcListImg;
}

export interface PcFilter {
  filterPcBrand: string[],
  filterCpuKind: string[],
  filterRamSpace: string[],
  filterGraKind: string[],
  filterOsName: string[];
}

export interface PcListImg {
  brandImg: string,
  mainImg: string
}

export interface PcSummary {
  pcCode: string, pcBrand: string, pcType: string,
  cpuName: string, cpuKind: string, cpuSpeed: string,
  ramSpeed: string, mainBoardRamLimit: string, hddSpace: string,
  hddSpeed: string, ssdSpace: string, ssdSpeed: string, graphicKind: string,
  osName: string, deliveryDate: string;
  pcPrice: number, pcDeliveryPrice: number, pcGrade: number, pcStock: number;
  pcDetailImg: PcDetailImg;
}

export interface PcDetail {
  pcCode: string, pcBrand: string, pcType: string,
  cpuBrand: string, cpuName: string, cpuSpeed: string, cpuType: string, cpuKind: string,
  ramBrand: string, ramName: string, ramSpace: string, ramSpeed: string,
  graphicBrand: string, graphicName: string, graphicKind: string,
  hddBrand: string, hddName: string, hddSpace: string, hddSpeed: string,
  ssdBrand: string, ssdName: string, ssdSpace: string, ssdSpeed: string,
  mainBoardBrand: string, mainBoardName: string, mainBoardRamLimit: string,
  osName: string;
  mainBoardRamSlot: number;
}

export interface PcDetailImg {
  brandImg: string;
  pcImg: string[];
  thumbnailImg: string[];
}

export interface FilterData {
  searchWord?: string;
  sortWord?: string;
  pcBrand?: boolean[];
  cpuKind?: boolean[];
  ramSpace?: boolean[];
  graKind?: boolean[];
  osName?: boolean[];
}
