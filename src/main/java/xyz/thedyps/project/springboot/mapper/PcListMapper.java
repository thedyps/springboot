package xyz.thedyps.project.springboot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import xyz.thedyps.project.springboot.goods.PcFilterListVO;
import xyz.thedyps.project.springboot.goods.PcListVO;

@Mapper
@Repository
public interface PcListMapper {
	int getPcListCount(String pcType);
	List<PcListVO> getPcList(String pcType, int start, int end);
	PcFilterListVO getPcFilterList();
}
