package xyz.thedyps.project.springboot.mapper;

import xyz.thedyps.project.springboot.goods.PcDetailImgVO;
import xyz.thedyps.project.springboot.goods.PcDetailVO;
import xyz.thedyps.project.springboot.goods.PcSummaryVO;

public interface PcDetailService {
	PcSummaryVO getPcSummary(String pcCode);
	PcDetailVO getPcDetail(String pcCode);
	PcDetailImgVO getPcImg(String pcCode);
}
