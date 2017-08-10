package xyz.thedyps.project.springboot.goods;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xyz.thedyps.project.springboot.goods.goodsVO.PcListVO;

@Mapper
@Repository
public interface PcListDAO {
	int getPcListCount(String pcType);
	List<PcListVO> getPcList(Map<String, Object> param);
}
