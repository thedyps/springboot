package xyz.thedyps.project.springboot.goods;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xyz.thedyps.project.springboot.goods.goodsVO.PcDetailImgVO;
import xyz.thedyps.project.springboot.goods.goodsVO.PcDetailVO;
import xyz.thedyps.project.springboot.goods.goodsVO.PcSummaryVO;

import java.util.List;
import java.util.Map;

@Mapper
@Repository
public interface PcDetailDAO {
	PcSummaryVO getPcSummary(String pcCode);
	PcDetailVO getPcDetail(String pcCode);
	int getPcImgCount(String pcCode);
	String getBrandImg(String pcCode);
	List<String> getPcImg(Map<String,Object> param);
	List<String> getThumbnailImg(Map<String,Object> param);
}
