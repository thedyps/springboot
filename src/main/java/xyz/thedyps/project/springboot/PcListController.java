package xyz.thedyps.project.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import xyz.thedyps.project.springboot.goods.exception.PcFilterListNotFoundException;
import xyz.thedyps.project.springboot.goods.exception.PcListNotFoundException;
import xyz.thedyps.project.springboot.goods.goodsVO.PcFilterListVO;
import xyz.thedyps.project.springboot.goods.goodsVO.PcListVO;
import xyz.thedyps.project.springboot.service.PcListService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "/goods/list")
public class PcListController {

	@Autowired
	PcListService service;

	@RequestMapping(value = "/{pcType}/count", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public int getPcListCount (@PathVariable String pcType) {
		int pcListCount = service.getPcListCount(pcType);
		if(pcListCount <= 0) { throw new PcListNotFoundException(pcType); }
		return pcListCount;
	}

	@RequestMapping(value = "/{pcType}/show", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public List<PcListVO> getPcList(@PathVariable String pcType) {
		List<PcListVO> pcList = service.getPcList(pcType, 1, 10);
		if(pcList == null) { throw new PcListNotFoundException(pcType); }
		return pcList;
	}

	@RequestMapping(value = "/filter", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public PcFilterListVO getPcFilterList () {
		PcFilterListVO pcFilterList = service.getFilterList();
		if(pcFilterList == null) { throw new PcFilterListNotFoundException(); }
		return pcFilterList;
	}

	@ExceptionHandler(PcListNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public Error pcListNotFound(PcListNotFoundException e) {
		String pcType = e.getPcType();
		return new Error(pcType + "의 상품 목록이 발견되지 않음", e);
	}

	@ExceptionHandler(PcFilterListNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public Error pcFilterListNotFound(PcFilterListNotFoundException e) {
		return new Error("필터 리스트가 발견되지 않음", e);
	}
}
