package xyz.thedyps.project.springboot.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xyz.thedyps.project.springboot.goods.PcListVO;

@Mapper
@Repository
public interface PcListMapper {
	int getPcListCount(String pcType);
	List<PcListVO> getPcList(Map<String, Object> param);
}
